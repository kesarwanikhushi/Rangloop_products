/* ============================================================
   RangLoop — Main JavaScript
   Handles: index.html catalog + product.html detail page
   ============================================================ */

// ============================================================
// SVG Icons (inline, no external dependency)
// ============================================================
const ICON_IG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`;
const ICON_IMG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
const ICON_COPY = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const ICON_CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;

// ============================================================
// Instagram handle — update this one place to change globally
// ============================================================
const INSTAGRAM_HANDLE = 'rangloop2026';

// ============================================================
// Utility: format price with Indian ₹ symbol
// ============================================================
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// ============================================================
// Utility: resolve image with fallback placeholder
// ============================================================
function imgTag(src, alt, cls = '') {
  // Renders an <img> that gracefully falls back to an SVG placeholder
  // if the actual image file does not exist yet.
  return `<img src="${src}" alt="${alt}" class="${cls}" loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <span class="img-placeholder" style="display:none;">${ICON_IMG}</span>`;
}


/* ============================================================
   INDEX PAGE LOGIC (catalog grid + category filter)
   ============================================================ */

/**
 * Renders product cards into #product-grid.
 * @param {Array} list — filtered array of product objects
 */
function renderGrid(list) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  if (list.length === 0) {
    grid.classList.add('empty');
    grid.innerHTML = `<p class="empty-state">No products in this category yet.</p>`;
    return;
  }

  grid.classList.remove('empty');
  grid.innerHTML = list.map(product => {
    const firstImage = product.images && product.images.length > 0 ? product.images[0] : null;
    const imageHTML = firstImage
      ? `<div class="card-image-wrap">${imgTag(firstImage, product.name)}</div>`
      : `<div class="card-image-wrap"><span class="img-placeholder">${ICON_IMG}</span></div>`;

    return `
      <a href="product.html?id=${product.id}"
         class="product-card"
         id="card-${product.id}"
         aria-label="${product.name} — ${formatPrice(product.price)}">
        ${imageHTML}
        <div class="card-body">
          <span class="tag card-category">${product.category}</span>
          <p class="card-name">${product.name}</p>
          <p class="card-price">${formatPrice(product.price)}</p>
        </div>
      </a>`;
  }).join('');
}

/**
 * Sets up category filter buttons and wires up click events.
 */
function initCategoryFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selected = btn.dataset.category;
      const filtered = selected === 'all'
        ? products
        : products.filter(p => p.category === selected);

      renderGrid(filtered);
    });
  });
}

/**
 * Entry point for index.html
 */
function initCatalogPage() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;            // Not on the catalog page

  renderGrid(products);         // Render all products initially
  initCategoryFilter();
}


/* ============================================================
   PRODUCT DETAIL PAGE LOGIC
   ============================================================ */

/**
 * Gets a query parameter value from the current URL.
 * @param {string} name — parameter name
 * @returns {string|null}
 */
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/**
 * Switches the main gallery image.
 * @param {string} src — image URL
 * @param {number} thumbIndex — which thumbnail to mark active
 */
function switchMainImage(src, thumbIndex) {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs = document.querySelectorAll('.thumb');

  if (mainImg) {
    mainImg.classList.add('fading');
    setTimeout(() => {
      mainImg.src = src;
      mainImg.classList.remove('fading');
    }, 180);
  }

  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === thumbIndex);
  });
}

/**
 * Builds and mounts the product detail view into #detail-root.
 * @param {Object} product
 */
function renderProductDetail(product) {
  const root = document.getElementById('detail-root');
  if (!root) return;

  // Track which size the user has selected
  let selectedSize = null;
  const hasSizes = product.sizes && product.sizes.length > 0;

  // Sizes section — renders clickable buttons, only when product has sizes
  const sizesHTML = hasSizes
    ? `<div class="detail-sizes">
         <span class="sizes-label">Select size</span>
         <div class="sizes-row" id="sizes-row">
           ${product.sizes.map(s =>
             `<button class="size-chip" data-size="${s}" aria-label="Size ${s}">${s}</button>`
           ).join('')}
         </div>
         <p class="size-required-hint" id="size-hint">Please select a size before ordering.</p>
       </div>
       <hr class="detail-divider">`
    : '';

  // Thumbnails — only shown when product has more than 1 image
  const hasThumbs = product.images && product.images.length > 1;
  const thumbsHTML = hasThumbs
    ? `<div class="gallery-thumbs" id="gallery-thumbs">
         ${product.images.map((src, i) =>
           `<button class="thumb ${i === 0 ? 'active' : ''}"
                    aria-label="View image ${i + 1}"
                    data-index="${i}"
                    data-src="${src}">
              <img src="${src}" alt="${product.name} view ${i + 1}" loading="lazy">
            </button>`
         ).join('')}
       </div>`
    : '';

  const firstImage = product.images && product.images.length > 0 ? product.images[0] : '';

  root.innerHTML = `
    <div class="product-detail">

      <!-- Left: Image Gallery -->
      <div class="image-gallery">
        <div class="gallery-main">
          <img src="${firstImage}" alt="${product.name}" id="gallery-main-img" loading="eager"
               style="width:100%;height:100%;object-fit:cover;"
               onerror="this.style.display='none'">
        </div>
        ${thumbsHTML}
      </div>

      <!-- Right: Product Info -->
      <div class="product-info">
        <span class="tag detail-category">${product.category}</span>
        <h1 class="detail-name">${product.name}</h1>
        <p class="detail-price">${formatPrice(product.price)}</p>

        <hr class="detail-divider">

        ${sizesHTML}

        <p class="detail-description">${product.description}</p>

        <hr class="detail-divider">

        <div class="order-section">
          <p class="order-heading">Want this?</p>
          <button class="btn-order" id="btn-order" aria-label="Order ${product.name} via Instagram DM">
            Order via Instagram DM
          </button>
          <p class="order-note">Message is auto-copied — just paste in Instagram</p>
        </div>
      </div>

    </div>`;

  // Wire up size chip selection
  if (hasSizes) {
    document.querySelectorAll('.size-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        // Deselect all, then select clicked
        document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        selectedSize = chip.dataset.size;

        // Hide the hint if it was showing
        const hint = document.getElementById('size-hint');
        if (hint) hint.classList.remove('visible');
      });
    });
  }

  // Wire up thumbnail clicks
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      switchMainImage(thumb.dataset.src, parseInt(thumb.dataset.index, 10));
    });
  });

  // Wire up order button
  document.getElementById('btn-order').addEventListener('click', () => {
    // If product has sizes, make sure one is selected
    if (hasSizes && !selectedSize) {
      const row  = document.getElementById('sizes-row');
      const hint = document.getElementById('size-hint');
      if (row)  {
        row.classList.remove('shake'); // reset so animation can retrigger
        void row.offsetWidth;         // force reflow
        row.classList.add('shake');
        row.addEventListener('animationend', () => row.classList.remove('shake'), { once: true });
      }
      if (hint) hint.classList.add('visible');
      return; // stop — don't open Instagram yet
    }
    orderViaInstagram(product, selectedSize);
  });
}

/**
 * Renders a "product not found" message.
 */
function renderNotFound() {
  const root = document.getElementById('detail-root');
  if (root) {
    root.innerHTML = `
      <div class="not-found">
        <h2>Product not found</h2>
        <p>This product may have been removed or the link is broken.</p>
        <a href="index.html" style="margin-top:16px;font-weight:600;">← Back to catalog</a>
      </div>`;
  }
}


/* ============================================================
   INSTAGRAM DM / ORDER MODAL
   ============================================================ */

/**
 * Opens the order modal and simultaneously opens Instagram DM in a new tab.
 * @param {Object} product
 */
/**
 * Opens the order modal, auto-copies the message, then opens Instagram DM.
 * @param {Object} product
 * @param {string|null} selectedSize
 */
async function orderViaInstagram(product, selectedSize) {
  const sizeText = selectedSize ? selectedSize : 'N/A';
  const message =
    `Hi! I want to order:\n` +
    `${product.name}\n` +
    `Size: ${sizeText}\n` +
    `Price: ${formatPrice(product.price)}`;

  // Auto-copy FIRST before opening Instagram (clipboard needs user gesture context)
  let autoCopied = false;
  try {
    await navigator.clipboard.writeText(message);
    autoCopied = true;
  } catch {
    // Clipboard blocked (e.g. file:// protocol) — user can still copy manually from modal
  }

  // Show modal
  showOrderModal(message, autoCopied);

  // Open Instagram DM in new tab — ig.me/m/ is Instagram's official DM deep link
  // Note: Instagram does not support pre-filled URL text parameters — auto-copy is the solution
  window.open(`https://ig.me/m/${INSTAGRAM_HANDLE}`, '_blank', 'noopener,noreferrer');
}

/**
 * Creates and displays the order modal.
 * @param {string}  message
 * @param {boolean} autoCopied — whether clipboard was already filled automatically
 */
function showOrderModal(message, autoCopied) {
  // Remove any existing modal first
  const existing = document.getElementById('order-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay visible';
  overlay.id = 'order-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Order via Instagram');

  const copyBtnLabel = autoCopied ? `${ICON_CHECK} Copied!` : `${ICON_COPY} Copy Message`;
  const copyBtnClass = autoCopied ? 'btn-copy copied' : 'btn-copy';
  const hintText = autoCopied
    ? 'Message copied! Just paste it in the Instagram DM that just opened.'
    : 'Paste this message in the Instagram DM that just opened.';

  overlay.innerHTML = `
    <div class="modal-box" id="order-modal-box">
      <button class="modal-close" id="modal-close-btn" aria-label="Close modal">×</button>

      <p class="modal-title">Opening Instagram…</p>
      <p class="modal-subtitle">Send us this message to place your order:</p>

      <div class="modal-message-wrap">
        <textarea class="modal-message" id="modal-message-text" readonly rows="5">${message}</textarea>
      </div>

      <button class="${copyBtnClass}" id="btn-copy-message">
        ${copyBtnLabel}
      </button>

      <p class="modal-hint">${hintText}</p>
    </div>`;

  document.body.appendChild(overlay);

  // If auto-copy succeeded, reset the button after 3s
  if (autoCopied) {
    setTimeout(() => {
      const btn = document.getElementById('btn-copy-message');
      if (btn) {
        btn.classList.remove('copied');
        btn.innerHTML = `${ICON_COPY} Copy Again`;
      }
    }, 3000);
  }

  // Close on × button
  document.getElementById('modal-close-btn').addEventListener('click', closeOrderModal);

  // Close on overlay click (but not on modal box itself)
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeOrderModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', handleModalEscape);

  // Copy button (manual fallback / re-copy)
  document.getElementById('btn-copy-message').addEventListener('click', copyOrderMessage);
}

function closeOrderModal() {
  const overlay = document.getElementById('order-modal-overlay');
  if (overlay) overlay.remove();
  document.removeEventListener('keydown', handleModalEscape);
}

function handleModalEscape(e) {
  if (e.key === 'Escape') closeOrderModal();
}

/**
 * Manually copies the message and shows Copied! feedback.
 */
async function copyOrderMessage() {
  const textarea = document.getElementById('modal-message-text');
  const btn = document.getElementById('btn-copy-message');
  if (!textarea || !btn) return;

  const text = textarea.value;

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback for older browsers / file:// contexts
    textarea.select();
    document.execCommand('copy');
    textarea.blur();
  }

  btn.classList.add('copied');
  btn.innerHTML = `${ICON_CHECK} Copied!`;

  setTimeout(() => {
    btn.classList.remove('copied');
    btn.innerHTML = `${ICON_COPY} Copy Again`;
  }, 2000);
}


/* ============================================================
   ENTRY POINT — runs on every page
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // ----- Index page -----
  initCatalogPage();

  // ----- Detail page -----
  const detailRoot = document.getElementById('detail-root');
  if (detailRoot) {
    const idParam = getQueryParam('id');
    if (!idParam) {
      renderNotFound();
      return;
    }

    const productId = parseInt(idParam, 10);
    const product = products.find(p => p.id === productId);

    if (product) {
      renderProductDetail(product);
      // Update page title dynamically
      document.title = `${product.name} — RangLoop`;
    } else {
      renderNotFound();
    }
  }
});
