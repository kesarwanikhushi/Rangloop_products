/* ============================================================
   RangLoop — Main JavaScript
   Handles: index.html catalog + product.html detail page
   ============================================================ */

// ============================================================
// SVG Icons (inline, no external dependency)
// ============================================================
const ICON_IG    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`;
const ICON_IMG   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
const ICON_COPY  = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const ICON_CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;

// ============================================================
// Instagram handle — update this one place to change globally
// ============================================================
const INSTAGRAM_HANDLE = 'rangloop.shop';

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
  return `<img src="${src}" alt="${alt}" class="${cls}" loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <span class="img-placeholder" style="display:none;">${ICON_IMG}</span>`;
}

// ============================================================
// Utility: preload images silently into browser cache
// ============================================================
const _preloaded = new Set();
function preloadImages(urls) {
  urls.forEach(url => {
    if (!url || _preloaded.has(url)) return;
    _preloaded.add(url);
    const img = new Image();
    img.src = url;
  });
}

// Preload ALL images for every colour of a product (background download)
function preloadAllProductImages(product) {
  if (!product.colors) return;
  const urls = product.colors.flatMap(c => c.images || []);
  preloadImages(urls);
}

// ============================================================
// Utility: get the first available image for a product
// (works with both old "images" array and new "colors" array)
// ============================================================
function getFirstImage(product) {
  if (product.colors && product.colors.length > 0) {
    const firstColor = product.colors[0];
    if (firstColor.images && firstColor.images.length > 0) {
      return firstColor.images[0];
    }
  }
  // Legacy fallback: old products with a plain "images" array
  if (product.images && product.images.length > 0) {
    return product.images[0];
  }
  return null;
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
    const firstImage = getFirstImage(product);
    const imageHTML = firstImage
      ? `<div class="card-image-wrap">${imgTag(firstImage, product.name)}</div>`
      : `<div class="card-image-wrap"><span class="img-placeholder">${ICON_IMG}</span></div>`;

    // Colour swatches on catalog card (up to 5)
    const swatchesHTML = (product.colors && product.colors.length > 0)
      ? `<div class="card-swatches" aria-label="Available colours">
          ${product.colors.slice(0, 5).map(c =>
            `<span class="card-swatch" style="background:${c.hex}" title="${c.name}" aria-label="${c.name}"></span>`
          ).join('')}
          ${product.colors.length > 5 ? `<span class="card-swatch-more">+${product.colors.length - 5}</span>` : ''}
         </div>`
      : '';

    return `
      <a href="/product.html?id=${product.id}"
         class="product-card"
         id="card-${product.id}"
         data-product-id="${product.id}"
         aria-label="${product.name} — ${formatPrice(product.price)}">
        ${imageHTML}
        <div class="card-body">
          <span class="tag card-category">${product.category}</span>
          <p class="card-name">${product.name}</p>
          ${swatchesHTML}
          <p class="card-price">${formatPrice(product.price)}</p>
        </div>
      </a>`;
  }).join('');

  // Preload each product's images when the user hovers the card
  grid.querySelectorAll('.product-card').forEach(card => {
    const pid = parseInt(card.dataset.productId, 10);
    const product = products.find(p => p.id === pid);
    if (!product) return;
    let hoverTimer;
    card.addEventListener('mouseenter', () => {
      // Small delay so rapid mouse-overs don't trigger unnecessary fetches
      hoverTimer = setTimeout(() => preloadAllProductImages(product), 120);
    });
    card.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
  });
}

/**
 * Sets up category filter buttons.
 */
function initCategoryFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
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
  if (!grid) return;

  renderGrid(products);
  initCategoryFilter();
}


/* ============================================================
   PRODUCT DETAIL PAGE LOGIC
   ============================================================ */

/**
 * Gets a query parameter value from the current URL.
 */
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/**
 * Switches the main gallery image with a fade animation.
 */
function switchMainImage(src, thumbIndex) {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs  = document.querySelectorAll('.thumb');
  const loader  = document.getElementById('gallery-loading');

  if (mainImg) {
    // If already cached, swap instantly — otherwise show loader
    const probe = new Image();
    probe.onload = () => {
      if (loader) loader.style.display = 'none';
      mainImg.classList.add('fading');
      setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('fading');
      }, 120);
    };
    // Show loader only if image isn't cached yet (takes > 50ms)
    const loaderTimer = setTimeout(() => {
      if (loader) loader.style.display = 'flex';
    }, 50);
    probe.onload = () => {
      clearTimeout(loaderTimer);
      if (loader) loader.style.display = 'none';
      mainImg.classList.add('fading');
      setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('fading');
      }, 120);
    };
    probe.src = src;
  }

  thumbs.forEach((t, i) => t.classList.toggle('active', i === thumbIndex));
}

/**
 * Switches the displayed colour variant on the detail page.
 * Updates the gallery (main image + thumbnails) and marks the
 * selected swatch button as active.
 * @param {Object} colorObj   — one entry from product.colors[]
 * @param {number} colorIndex — index in product.colors[]
 */
function switchColor(colorObj, colorIndex) {
  // Update swatch buttons
  document.querySelectorAll('.color-swatch-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === colorIndex);
    btn.setAttribute('aria-pressed', i === colorIndex ? 'true' : 'false');
  });

  // Update colour label
  const label = document.getElementById('selected-color-label');
  if (label) label.textContent = colorObj.name;

  // Rebuild thumbnails
  const thumbsContainer = document.getElementById('gallery-thumbs');
  const images = colorObj.images || [];

  if (thumbsContainer) {
    if (images.length > 1) {
      thumbsContainer.style.display = '';
      thumbsContainer.innerHTML = images.map((src, i) =>
        `<button class="thumb ${i === 0 ? 'active' : ''}"
                 aria-label="View image ${i + 1}"
                 data-index="${i}"
                 data-src="${src}">
           <img src="${src}" alt="view ${i + 1}" loading="lazy">
         </button>`
      ).join('');

      // Re-wire thumbnail clicks
      thumbsContainer.querySelectorAll('.thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          switchMainImage(thumb.dataset.src, parseInt(thumb.dataset.index, 10));
        });
      });
    } else {
      thumbsContainer.style.display = 'none';
      thumbsContainer.innerHTML = '';
    }
  }

  // Switch main image to first image of this colour
  const mainImg = document.getElementById('gallery-main-img');
  if (mainImg && images.length > 0) {
    mainImg.classList.add('fading');
    setTimeout(() => {
      mainImg.src = images[0];
      mainImg.classList.remove('fading');
    }, 180);
  }
}

/**
 * Builds and mounts the product detail view into #detail-root.
 */
function renderProductDetail(product) {
  const root = document.getElementById('detail-root');
  if (!root) return;

  let selectedSize = null;
  const hasSizes = product.sizes && product.sizes.length > 0;

  // ── Handle both old (images[]) and new (colors[]) data shapes ──
  const hasColors = product.colors && product.colors.length > 0;
  const activeColor = hasColors ? product.colors[0] : null;

  // Initial images: first colour's images, or legacy images[]
  const initialImages = hasColors
    ? (activeColor.images || [])
    : (product.images || []);

  const firstImage = initialImages.length > 0 ? initialImages[0] : '';

  // ── Colour swatches section ──
  const colorsHTML = hasColors
    ? `<div class="detail-colors">
         <span class="colors-label">Colour: <strong id="selected-color-label">${activeColor.name}</strong></span>
         <div class="color-swatches-row" id="color-swatches-row">
           ${product.colors.map((c, i) =>
             `<button class="color-swatch-btn ${i === 0 ? 'active' : ''}"
                      data-color-index="${i}"
                      style="--swatch-color:${c.hex}"
                      aria-label="${c.name}"
                      aria-pressed="${i === 0 ? 'true' : 'false'}"
                      title="${c.name}">
                <span class="swatch-dot" style="background:${c.hex}"></span>
              </button>`
           ).join('')}
         </div>
       </div>
       <hr class="detail-divider">`
    : '';

  // ── Sizes section ──
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

  // ── Thumbnails (initial render) ──
  const hasThumbs = initialImages.length > 1;
  const thumbsHTML = hasThumbs
    ? `<div class="gallery-thumbs" id="gallery-thumbs">
         ${initialImages.map((src, i) =>
           `<button class="thumb ${i === 0 ? 'active' : ''}"
                    aria-label="View image ${i + 1}"
                    data-index="${i}"
                    data-src="${src}">
              <img src="${src}" alt="${product.name} view ${i + 1}" loading="lazy">
            </button>`
         ).join('')}
       </div>`
    : `<div class="gallery-thumbs" id="gallery-thumbs" style="display:none;"></div>`;

  root.innerHTML = `
    <div class="product-detail">

      <!-- Left: Image Gallery -->
      <div class="image-gallery">
        <div class="gallery-main" id="gallery-main-wrap">
          <img src="${firstImage}" alt="${product.name}" id="gallery-main-img" loading="eager"
               style="width:100%;height:100%;object-fit:cover;"
               onerror="this.style.display='none'">
          <div class="gallery-loading" id="gallery-loading" style="display:none;"
               aria-label="Loading image"></div>
        </div>
        ${thumbsHTML}
      </div>

      <!-- Right: Product Info -->
      <div class="product-info">
        <span class="tag detail-category">${product.category}</span>
        <h1 class="detail-name">${product.name}</h1>
        <p class="detail-price">${formatPrice(product.price)}</p>

        <hr class="detail-divider">

        ${colorsHTML}
        ${sizesHTML}

        <p class="detail-description">${product.description}</p>

        <hr class="detail-divider">

        <div class="order-section">
          <p class="order-heading">Want this?</p>
          <button class="btn-order" id="btn-order" aria-label="Order ${product.name} via Instagram DM">
            Order via Instagram DM
          </button>
          <p class="order-note">A message will be ready to copy — then open Instagram DM</p>
        </div>
      </div>

    </div>`;

  // ── Preload ALL color images immediately in the background ──
  preloadAllProductImages(product);

  // ── Wire colour swatch clicks + hover preloading ──
  if (hasColors) {
    document.querySelectorAll('.color-swatch-btn').forEach((btn, i) => {
      // Preload on hover so images are cached before click
      btn.addEventListener('mouseenter', () => preloadImages(product.colors[i].images || []));
      btn.addEventListener('click', () => switchColor(product.colors[i], i));
    });
  }

  // ── Wire size chip selection ──
  if (hasSizes) {
    document.querySelectorAll('.size-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        selectedSize = chip.dataset.size;
        const hint = document.getElementById('size-hint');
        if (hint) hint.classList.remove('visible');
      });
    });
  }

  // ── Wire thumbnail clicks (initial colour) ──
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      switchMainImage(thumb.dataset.src, parseInt(thumb.dataset.index, 10));
    });
  });

  // ── Wire order button ──
  document.getElementById('btn-order').addEventListener('click', () => {
    if (hasSizes && !selectedSize) {
      const row  = document.getElementById('sizes-row');
      const hint = document.getElementById('size-hint');
      if (row) {
        row.classList.remove('shake');
        void row.offsetWidth;
        row.classList.add('shake');
        row.addEventListener('animationend', () => row.classList.remove('shake'), { once: true });
      }
      if (hint) hint.classList.add('visible');
      return;
    }

    // Include selected colour in the order message
    const colorLabel = hasColors
      ? (document.getElementById('selected-color-label')?.textContent || '')
      : '';
    orderViaInstagram(product, selectedSize, colorLabel);
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
        <a href="/shop/" style="margin-top:16px;font-weight:600;">← Back to catalog</a>
      </div>`;
  }
}


/* ============================================================
   INSTAGRAM DM / ORDER MODAL
   ============================================================ */

/**
 * Builds the order message and opens the modal.
 * Instagram DM only opens when user clicks the button inside the modal.
 * @param {Object}      product
 * @param {string|null} selectedSize
 * @param {string}      selectedColor
 */
async function orderViaInstagram(product, selectedSize, selectedColor) {
  const sizeText  = selectedSize  ? selectedSize  : 'N/A';
  const colorText = selectedColor ? selectedColor : '';

  let message =
    `Hi! I want to order:\n` +
    `${product.name}\n`;
  if (colorText) message += `Colour: ${colorText}\n`;
  message +=
    `Size: ${sizeText}\n` +
    `Price: ${formatPrice(product.price)}`;

  // Show modal first — Instagram opens only when user clicks the button inside
  showOrderModal(message);
}

/**
 * Creates and displays the two-step order modal.
 * Step 1 — user copies the message.
 * Step 2 — user clicks "Open Instagram DM" to go to Instagram.
 */
function showOrderModal(message) {
  const existing = document.getElementById('order-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay visible';
  overlay.id = 'order-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Order via Instagram');

  overlay.innerHTML = `
    <div class="modal-box" id="order-modal-box">
      <button class="modal-close" id="modal-close-btn" aria-label="Close modal">×</button>

      <!-- Step indicator -->
      <div class="modal-steps">
        <div class="modal-step active" id="modal-step-1">
          <span class="step-num">1</span>
          <span class="step-label">Copy message</span>
        </div>
        <div class="modal-step-arrow">→</div>
        <div class="modal-step" id="modal-step-2">
          <span class="step-num">2</span>
          <span class="step-label">Open Instagram</span>
        </div>
      </div>

      <p class="modal-title">Your order message</p>
      <p class="modal-subtitle">Copy this message, then open Instagram DM to send it.</p>

      <div class="modal-message-wrap">
        <textarea class="modal-message" id="modal-message-text" readonly rows="5">${message}</textarea>
      </div>

      <!-- Step 1: Copy button -->
      <button class="btn-copy" id="btn-copy-message">
        ${ICON_COPY} Copy Message
      </button>

      <!-- Step 2: Open Instagram (disabled until copied) -->
      <button class="btn-open-ig" id="btn-open-ig" disabled aria-label="Open Instagram DM">
        ${ICON_IG} Open Instagram DM
      </button>

      <p class="modal-hint" id="modal-hint-text">👆 Copy the message first, then open Instagram DM</p>
    </div>`;

  document.body.appendChild(overlay);

  document.getElementById('modal-close-btn').addEventListener('click', closeOrderModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeOrderModal(); });
  document.addEventListener('keydown', handleModalEscape);
  document.getElementById('btn-copy-message').addEventListener('click', copyOrderMessage);

  // "Open Instagram DM" button — only available after copying
  document.getElementById('btn-open-ig').addEventListener('click', () => {
    window.open(`https://ig.me/m/${INSTAGRAM_HANDLE}`, '_blank', 'noopener,noreferrer');
    closeOrderModal();
  });
}

function closeOrderModal() {
  const overlay = document.getElementById('order-modal-overlay');
  if (overlay) overlay.remove();
  document.removeEventListener('keydown', handleModalEscape);
}

function handleModalEscape(e) {
  if (e.key === 'Escape') closeOrderModal();
}

async function copyOrderMessage() {
  const textarea = document.getElementById('modal-message-text');
  const copyBtn  = document.getElementById('btn-copy-message');
  const igBtn    = document.getElementById('btn-open-ig');
  const hint     = document.getElementById('modal-hint-text');
  const step1    = document.getElementById('modal-step-1');
  const step2    = document.getElementById('modal-step-2');
  if (!textarea || !copyBtn) return;

  try {
    await navigator.clipboard.writeText(textarea.value);
  } catch {
    textarea.select();
    document.execCommand('copy');
    textarea.blur();
  }

  // Mark step 1 done, activate step 2
  copyBtn.classList.add('copied');
  copyBtn.innerHTML = `${ICON_CHECK} Copied!`;
  if (step1) { step1.classList.remove('active'); step1.classList.add('done'); }
  if (step2) { step2.classList.add('active'); }

  // Enable the Instagram button
  if (igBtn) igBtn.removeAttribute('disabled');

  // Update hint
  if (hint) hint.textContent = '✅ Message copied! Now click "Open Instagram DM" below.';

  // Reset copy button label after a delay
  setTimeout(() => {
    copyBtn.classList.remove('copied');
    copyBtn.innerHTML = `${ICON_COPY} Copy Again`;
  }, 2500);
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
    if (!idParam) { renderNotFound(); return; }

    const productId = parseInt(idParam, 10);
    const product   = products.find(p => p.id === productId);

    if (product) {
      renderProductDetail(product);
      document.title = `${product.name} — RangLoop`;
    } else {
      renderNotFound();
    }
  }
});
