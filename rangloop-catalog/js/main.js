/* ============================================================
   RangLoop — Main JavaScript
   ============================================================ */

const INSTAGRAM_URL = "https://ig.me/m/rangloop.official";

// Utility: format price with Indian ₹ symbol
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  
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

function renderCatalog(category) {
  const catalogGrid = document.getElementById('catalog-grid');
  if (!catalogGrid) return;

  // Filter products list
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

  if (filteredProducts.length === 0) {
    catalogGrid.classList.add('empty');
    catalogGrid.innerHTML = `<p class="empty-state">No products found in this category.</p>`;
    return;
  }

  catalogGrid.classList.remove('empty');
  catalogGrid.innerHTML = filteredProducts.map(product => {
    // Get first image
    let firstImage = "images/logo/logo.webp"; // fallback
    if (product.colors && product.colors.length > 0 && product.colors[0].images && product.colors[0].images.length > 0) {
      firstImage = product.colors[0].images[0];
    }

    return `
      <div class="product-card" data-id="${product.id}">
        <a href="product.html?id=${product.id}" class="card-img-wrap-link">
          <div class="card-img-wrap">
            <img src="${firstImage}" alt="${product.name}" loading="lazy">
          </div>
        </a>
        <div class="card-body">
          <span class="card-category">${product.category}</span>
          <h3 class="card-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
          <p class="card-price">${formatPrice(product.price)}</p>
          <button class="btn-card-order" onclick="triggerDirectOrder(${product.id})">Order via Instagram</button>
        </div>
      </div>
    `;
  }).join('');
}

// Global scope function for card direct order triggers
window.triggerDirectOrder = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Construct dynamic order message (no size specified for general catalog card click)
  const message = `Hi RangLoop! I want to order:\n${product.name}\nPrice: ${formatPrice(product.price)}\nSize: ___\nPlease send me a design mockup.`;
  
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
  renderProductDetail(product);
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

function renderProductDetail(product) {
  const root = document.getElementById('detail-layout-root');
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');
  if (!root) return;

  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = product.name;
  }

  // Pre-select first color variant if available
  const hasColors = product.colors && product.colors.length > 0;
  activeColorObj = hasColors ? product.colors[0] : null;
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
  let sizesHTML = "";
  if (product.sizes && product.sizes.length > 0) {
    sizesHTML = `
      <div class="detail-sizes-label">SIZES AVAILABLE</div>
      <div class="detail-sizes-row" id="detail-sizes-row">
        ${product.sizes.map(size => `
          <button class="detail-size-pill inactive" data-size="${size}" onclick="selectDetailSize(this, '${size}')">${size}</button>
        `).join('')}
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

  const message = `Hi RangLoop! I want to order:\n${activeDetailProduct.name}${colorPart}${sizePart}\nPrice: ${formatPrice(activeDetailProduct.price)}\nPlease send me a design mockup.`;

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

  if (!modal || !textarea) return;

  textarea.value = messageText;
  modal.classList.add('visible');

  // Trigger redirection immediately in a new tab
  window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');

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
