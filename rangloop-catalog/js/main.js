/* ============================================================
   RangLoop — Main JavaScript
   ============================================================ */

const INSTAGRAM_URL = "https://ig.me/m/rangloop.shop";

// Utility: format price with Indian ₹ symbol
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initMarquee();
  
  // Check which page we are on
  const isCatalogPage = document.getElementById('catalog-grid') !== null;
  const isDetailPage = document.getElementById('detail-layout-root') !== null;

  if (isCatalogPage) {
    initCatalogPage();
  } else if (isDetailPage) {
    initDetailPage();
  }
});

/* ============================================================
   MOBILE HAMBURGER MENU
   ============================================================ */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuCloseBtn = document.getElementById('menu-close-btn');

  if (!hamburgerBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  

  function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openMenu);
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', closeMenu);
  }

  // Close menu when clicking overlay links
  const overlayLinks = mobileMenu.querySelectorAll('.mobile-nav-links a');
  overlayLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ============================================================
   CATALOG PAGE LOGIC
   ============================================================ */
function initCatalogPage() {
  const catalogGrid = document.getElementById('catalog-grid');
  const filterPills = document.querySelectorAll('.filter-pill');
  if (!catalogGrid) return;

  // Read URL query parameter for category
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');

  // Initial render
  let activeCategory = 'all';
  if (initialCategory) {
    const validPill = Array.from(filterPills).find(pill => pill.getAttribute('data-category').toLowerCase() === initialCategory.toLowerCase());
    if (validPill) {
      activeCategory = validPill.getAttribute('data-category');
    }
  }

  updateFilterPills(activeCategory);
  renderCatalog(activeCategory);

  // Wire up filter pill clicks
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.getAttribute('data-category');
      updateFilterPills(category);
      renderCatalog(category);
      
      // Update URL without reloading page
      const newUrl = category === 'all' ? 'shop.html' : `shop.html?category=${encodeURIComponent(category)}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    });
  });
}

function updateFilterPills(activeCategory) {
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    const cat = pill.getAttribute('data-category');
    if (cat.toLowerCase() === activeCategory.toLowerCase()) {
      pill.classList.remove('inactive');
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
      pill.classList.add('inactive');
    }
  });
}

function shouldExpandIntoVariantCards(product) {
  return product
    && product.category
    && product.category.toLowerCase() === 'home & lifestyle'
    && Array.isArray(product.colors)
    && product.colors.length > 1;
}

function buildCatalogItems(productsList) {
  return productsList.flatMap(product => {
    if (!shouldExpandIntoVariantCards(product)) {
      return [{ product, variantIndex: null, variant: null }];
    }

    return product.colors
      .map((variant, variantIndex) => ({ product, variantIndex, variant }))
      .filter(item => Array.isArray(item.variant.images) && item.variant.images.length > 0);
  });
}

function getCatalogCardImage(product, variantIndex) {
  const fallbackImage = 'images/logo/logo.webp';

  if (variantIndex !== null && product.colors && product.colors[variantIndex] && product.colors[variantIndex].images && product.colors[variantIndex].images.length > 0) {
    return product.colors[variantIndex].images[0];
  }

  if (product.colors && product.colors.length > 0 && product.colors[0].images && product.colors[0].images.length > 0) {
    return product.colors[0].images[0];
  }

  return fallbackImage;
}

function renderCatalog(category) {
  const catalogGrid = document.getElementById('catalog-grid');
  if (!catalogGrid) return;

  // Filter products list
  let filteredProducts;
  if (category === 'all') {
    // Shuffle all products into a random mixed order
    filteredProducts = [...products].sort(() => Math.random() - 0.5);
  } else {
    filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  const catalogItems = buildCatalogItems(filteredProducts);

  if (category === 'all') {
    catalogItems.sort(() => Math.random() - 0.5);
  }


  if (catalogItems.length === 0) {
    catalogGrid.classList.add('empty');
    catalogGrid.innerHTML = `<p class="empty-state">No products found in this category.</p>`;
    return;
  }

  catalogGrid.classList.remove('empty');
  catalogGrid.innerHTML = catalogItems.map(item => {
    const { product, variantIndex, variant } = item;
    const firstImage = getCatalogCardImage(product, variantIndex);
    const cardName = variant ? `${product.name}` : product.name;
    const variantLabel = variant ? `<p class="card-variant">${variant.name}</p>` : '';
    const productLink = variantIndex !== null ? `product.html?id=${product.id}&color=${variantIndex}` : `product.html?id=${product.id}`;
    const orderButton = variantIndex !== null
      ? `onclick="triggerDirectOrder(${product.id}, ${variantIndex})"`
      : `onclick="triggerDirectOrder(${product.id})"`;

    return `
      <div class="product-card" data-id="${product.id}">
        <a href="${productLink}" class="card-img-wrap-link">
          <div class="card-img-wrap">
            <img src="${firstImage}" alt="${variant ? `${product.name} ${variant.name}` : product.name}" loading="lazy">
          </div>
        </a>
        <div class="card-body">
          <span class="card-category">${product.category}</span>
          <h3 class="card-name"><a href="${productLink}">${cardName}</a></h3>
          ${variantLabel}
          <p class="card-price">${formatPrice(product.price)}</p>
          <button class="btn-card-order" ${orderButton}>Order via Instagram</button>
        </div>
      </div>
    `;
  }).join('');
}

// Global scope function for card direct order triggers
window.triggerDirectOrder = function(productId, variantIndex = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const variant = variantIndex !== null && product.colors && product.colors[variantIndex] ? product.colors[variantIndex] : null;
  
  // Construct dynamic order message (no size specified for general catalog card click)
  const variantPart = variant ? `\nSet: ${variant.name}` : '';
  const message = `Hi RangLoop! I want to order:\n${product.name}${variantPart}\nPrice: ${formatPrice(product.price)}\nSize: ___`;
  
  openInstagramModal(message);
};

/* ============================================================
   PRODUCT DETAIL PAGE LOGIC
   ============================================================ */
let activeDetailProduct = null;
let selectedSize = null;
let activeColorObj = null;

function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const colorParam = urlParams.get('color') ?? urlParams.get('variant');
  const requestedColorIndex = Number.isFinite(Number.parseInt(colorParam, 10)) ? Number.parseInt(colorParam, 10) : 0;
  
  if (!productId || isNaN(productId)) {
    renderDetailNotFound();
    return;
  }

  const product = products.find(p => p.id === productId);
  if (!product) {
    renderDetailNotFound();
    return;
  }

  activeDetailProduct = product;
  renderProductDetail(product, requestedColorIndex);
}

function renderDetailNotFound() {
  const root = document.getElementById('detail-layout-root');
  if (root) {
    root.innerHTML = `
      <div style="flex: 1; text-align: center; padding: 80px 0;">
        <h2 style="font-size: 2rem; margin-bottom: 16px;">Product Not Found</h2>
        <p style="font-family: var(--font-sans); color: var(--text-muted); margin-bottom: 24px;">The product you are looking for does not exist or has been removed.</p>
        <a href="shop.html" class="btn-primary">Back to Shop</a>
      </div>
    `;
  }
}

function renderProductDetail(product, initialColorIndex = 0) {
  const root = document.getElementById('detail-layout-root');
  if (!root) return;

  // Pre-select first color variant if available
  const hasColors = product.colors && product.colors.length > 0;
  const safeColorIndex = hasColors ? Math.min(Math.max(initialColorIndex, 0), product.colors.length - 1) : 0;
  activeColorObj = hasColors ? product.colors[safeColorIndex] : null;
  const initialImages = activeColorObj ? activeColorObj.images : [];
  const mainImage = initialImages.length > 0 ? initialImages[0] : "images/logo/logo.webp";

  // Gallery section HTML
  const galleryHTML = `
    <div class="detail-gallery-wrap">
      <div class="main-image-box">
        <img id="detail-main-img" src="${mainImage}" alt="${product.name}">
      </div>
      <div class="thumb-gallery" id="detail-thumbs">
        ${initialImages.map((img, index) => `
          <div class="thumb-item ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="switchDetailThumbnail(${index})">
            <img src="${img}" alt="${product.name} thumbnail ${index + 1}">
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Colors list HTML
  let colorsHTML = "";
  if (hasColors) {
    colorsHTML = `
      <div class="detail-colors-label">COLOR: <span id="active-color-name" style="font-weight: 600; color: var(--burgundy);">${activeColorObj.name}</span></div>
      <div class="detail-colors-row">
        ${product.colors.map((color, index) => `
          <div class="color-swatch-wrap ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="switchDetailColor(${index})" title="${color.name}">
            <div class="color-dot" style="background-color: ${color.hex};"></div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Sizes list HTML
  // Default size chart to use for products that don't define their own
  const defaultSizeChart = {
    headers: ["XS", "S", "M", "L", "XL", "2XL"],
    rows: [
      { label: "Chest (Inch)", values: [40, 42, 44, 46, 48, 50] },
      { label: "Length (Inch)", values: [27, 28, 29, 30, 31, 32] },
      { label: "Shoulder (Inch)", values: [18, 19, 20, 21, 22, 23] }
    ]
  };

  // Decide which size list to show: product.sizes if product provides a full list,
  // otherwise fall back to the default chart headers when a size chart will be shown.
  const sizesToDisplay = (product.sizes && product.sizes.length > 0)
    ? (product.sizeChart ? product.sizes : defaultSizeChart.headers)
    : [];

  let sizesHTML = "";
  if (sizesToDisplay && sizesToDisplay.length > 0) {
    sizesHTML = `
      <div class="detail-sizes-label">SIZES AVAILABLE</div>
      <div class="detail-sizes-row" id="detail-sizes-row">
        ${sizesToDisplay.map(size => `
          <button class="detail-size-pill inactive" data-size="${size}" onclick="selectDetailSize(this, '${size}')">${size}</button>
        `).join('')}
      </div>
    `;
  }

  // Size chart HTML (use product.sizeChart if present, otherwise fall back to default)
  const activeSizeChart = (product.sizeChart && product.sizeChart.headers && product.sizeChart.rows)
    ? product.sizeChart
    : (product.sizes ? defaultSizeChart : null);

  let sizeChartHTML = "";
  if (activeSizeChart) {
    sizeChartHTML = `
      <div class="detail-sizechart-wrap">
        <h4 class="detail-sizechart-title">SIZE CHART (INCH)</h4>
        <table class="detail-sizechart-table">
          <thead>
            <tr>
              <th style="text-align:left; padding-left:8px;">Size</th>
              ${activeSizeChart.headers.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${activeSizeChart.rows.map(row => `
              <tr>
                <td style="font-weight:600; padding-right:12px;">${row.label}</td>
                ${row.values.map(v => `<td>${v}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Instagram SVG Icon
  const igIcon = `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`;

  // Details Info Section HTML
  const infoHTML = `
    <div class="detail-info-wrap">
      <span class="detail-category">${product.category}</span>
      <h1 class="detail-name">${product.name}</h1>
      <span class="dec-line"></span>
      <p class="detail-price">${formatPrice(product.price)}</p>
      
      <hr class="detail-divider">
      
      ${colorsHTML}
      ${sizesHTML}
      ${sizeChartHTML}
      
      <p class="detail-description">${product.description}</p>
      
      <button class="btn-detail-order" onclick="triggerDetailOrder()">
        ${igIcon} ORDER VIA INSTAGRAM
      </button>
      <p class="detail-order-hint">We'll send a free design mockup within 24 hours of your message.</p>
    </div>
  `;

  root.innerHTML = galleryHTML + infoHTML;
}

// Global functions for detail interactions
window.switchDetailThumbnail = function(index) {
  if (!activeColorObj || !activeColorObj.images) return;
  
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) {
    mainImg.src = activeColorObj.images[index];
  }

  const thumbs = document.querySelectorAll('.thumb-item');
  thumbs.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
};

window.switchDetailColor = function(colorIndex) {
  if (!activeDetailProduct || !activeDetailProduct.colors) return;
  
  activeColorObj = activeDetailProduct.colors[colorIndex];
  
  // Update color text label
  const colorLabel = document.getElementById('active-color-name');
  if (colorLabel) {
    colorLabel.textContent = activeColorObj.name;
  }

  // Update swatches active ring
  const swatches = document.querySelectorAll('.color-swatch-wrap');
  swatches.forEach((swatch, idx) => {
    if (idx === colorIndex) {
      swatch.classList.add('active');
    } else {
      swatch.classList.remove('active');
    }
  });

  // Re-render thumbnails and main image
  const mainImg = document.getElementById('detail-main-img');
  const thumbsContainer = document.getElementById('detail-thumbs');
  
  if (activeColorObj.images && activeColorObj.images.length > 0) {
    if (mainImg) {
      mainImg.src = activeColorObj.images[0];
    }
    
    if (thumbsContainer) {
      thumbsContainer.innerHTML = activeColorObj.images.map((img, index) => `
        <div class="thumb-item ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="switchDetailThumbnail(${index})">
          <img src="${img}" alt="${activeDetailProduct.name} thumbnail ${index + 1}">
        </div>
      `).join('');
    }
  }
};

window.selectDetailSize = function(button, size) {
  selectedSize = size;
  
  const sizePills = document.querySelectorAll('.detail-size-pill');
  sizePills.forEach(pill => {
    if (pill === button) {
      pill.classList.remove('inactive');
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
      pill.classList.add('inactive');
    }
  });
};

window.triggerDetailOrder = function() {
  if (!activeDetailProduct) return;
  
  // Verify size selection if size exists
  const hasSizes = activeDetailProduct.sizes && activeDetailProduct.sizes.length > 0;
  if (hasSizes && !selectedSize) {
    alert("Please select a size first.");
    const sizeRow = document.getElementById('detail-sizes-row');
    if (sizeRow) {
      sizeRow.style.outline = "2px solid var(--terracotta)";
      setTimeout(() => {
        sizeRow.style.outline = "none";
      }, 1500);
    }
    return;
  }

  const colorPart = activeColorObj ? `\nColor: ${activeColorObj.name}` : "";
  const sizePart = selectedSize ? `\nSize: ${selectedSize}` : "";

  const message = `Hi RangLoop! I want to order:\n${activeDetailProduct.name}${colorPart}${sizePart}\nPrice: ${formatPrice(activeDetailProduct.price)}`;

  openInstagramModal(message);
};

/* ============================================================
   ORDER MODAL
   ============================================================ */
function openInstagramModal(messageText) {
  const modal = document.getElementById('order-modal');
  const textarea = document.getElementById('modal-text-content');
  const copyBtn = document.getElementById('btn-modal-copy-action');
  const closeBtn = document.getElementById('modal-close-btn');
  const igBtn = document.getElementById('btn-modal-open-ig');

  if (!modal || !textarea) return;

  textarea.value = messageText;
  modal.classList.add('visible');

  // Wire up close operations
  function closeModal() {
    modal.classList.remove('visible');
  }

  closeBtn.onclick = closeModal;
  modal.onclick = function(e) {
    if (e.target === modal) {
      closeModal();
    }
  };

  // Open Instagram DM button — redirect only when user clicks
  if (igBtn) {
    igBtn.onclick = function() {
      window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
    };
  }

  // Copy functionality
  copyBtn.onclick = function() {
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
      navigator.clipboard.writeText(textarea.value).then(() => {
        showCopyToast();
      });
    } catch (err) {
      // Fallback
      document.execCommand('copy');
      showCopyToast();
    }
  };
}

function showCopyToast() {
  const toast = document.getElementById('modal-copy-toast');
  const copyBtn = document.getElementById('btn-modal-copy-action');
  if (!toast) return;

  toast.classList.add('show');
  if (copyBtn) {
    copyBtn.textContent = "Copied! ✓";
  }

  setTimeout(() => {
    toast.classList.remove('show');
    if (copyBtn) {
      copyBtn.textContent = "Copy Message";
    }
  }, 2000);
}

/* ============================================================
   DYNAMIC INFINITE MARQUEE CLONER
   ============================================================ */
function initMarquee() {
  const marquee = document.querySelector('.marquee');
  if (!marquee) return;

  const originalContent = marquee.querySelector('.marquee-content');
  if (!originalContent) return;

  // Measure content width (fallback to a sensible default if element is not rendered yet)
  const contentWidth = originalContent.offsetWidth || 1200;
  const viewportWidth = window.innerWidth;
  
  // We need enough copies to fill the screen width plus at least one extra copy to buffer the scroll
  const neededCopies = Math.max(3, Math.ceil(viewportWidth / contentWidth) + 1);
  
  // Fetch existing marquee-content elements
  const existingContents = marquee.querySelectorAll('.marquee-content');
  const currentCount = existingContents.length;
  
  if (currentCount < neededCopies) {
    // Add clones
    for (let i = currentCount; i < neededCopies; i++) {
      const clone = originalContent.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      marquee.appendChild(clone);
    }
  } else if (currentCount > neededCopies) {
    // Remove extra clones, keeping at least 3
    const limit = Math.max(3, neededCopies);
    for (let i = currentCount - 1; i >= limit; i--) {
      existingContents[i].remove();
    }
  }
}

// Run marquee initialization on window load to ensure accurate element dimensions
window.addEventListener('load', initMarquee);

// Handle window resizing or zoom level changes
let marqueeResizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(marqueeResizeTimeout);
  marqueeResizeTimeout = setTimeout(initMarquee, 150);
});

