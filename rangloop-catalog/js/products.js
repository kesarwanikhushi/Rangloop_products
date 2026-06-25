// ============================================================
// RangLoop — Product Data File
// ============================================================
//
// HOW TO ADD / EDIT A T-SHIRT (No coding experience needed!)
// ----------------------------------------------------------
//
// FOLDER STRUCTURE (already created for you):
//   images/tshirts/tshirt-01/black/front.jpg
//   images/tshirts/tshirt-01/black/back.jpg
//   images/tshirts/tshirt-01/white/front.jpg
//   ... and so on for each colour.
//
// STEP 1 — Add your images
//   Copy your photo files into the correct colour subfolder,
//   e.g. images/tshirts/tshirt-01/black/front.jpg
//
// STEP 2 — Update this file
//   Find the matching t-shirt below (by id / name).
//   Inside its "colors" array, fill in the image paths
//   for each colour variant you actually have photos for.
//   DELETE colour entries you don't have yet — they simply
//   won't appear on the website.
//
// STEP 3 — Save & refresh the browser. Done!
//
// COLOR SWATCH HEX CODES (pre-filled, just use them):
//   black  → #1a1a1a    white  → #f5f5f5    red    → #cc2936
//   blue   → #2563eb    green  → #16a34a    yellow → #facc15
//   navy   → #1e3a5f    grey   → #9ca3af    maroon → #7f1d1d
//   orange → #ea580c
//
// IMAGE PATHS FOLLOW THIS PATTERN:
//   "images/tshirts/tshirt-XX/colourname/filename.jpg"
//
// EVERY id MUST BE UNIQUE (1, 2, 3 … 10)
// ============================================================

const products = [

  // ── T-SHIRT 01 ────────────────────────────────────────────
  {
    id: 1,
    name: "T-Shirt 01",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/tshirt-01/black/ChatGPT Image Jun 25, 2026, 01_53_39 PM.png",
          "images/tshirts/tshirt-01/black/ChatGPT Image Jun 25, 2026, 05_39_20 PM.png",
          "images/tshirts/tshirt-01/black/Gemini_Generated_Image_1o6nhy1o6nhy1o6n.png",
          "images/tshirts/tshirt-01/black/Gemini_Generated_Image_3jwkny3jwkny3jwk.png"
        ]
      },
      {
        name: "Blue",
        hex: "#2563eb",
        images: [
          "images/tshirts/tshirt-01/blue/Gemini_Generated_Image_33zorv33zorv33zo.png",
          "images/tshirts/tshirt-01/blue/Gemini_Generated_Image_4p1l7m4p1l7m4p1l.png",
          "images/tshirts/tshirt-01/blue/Gemini_Generated_Image_a9w0xta9w0xta9w0.png",
          "images/tshirts/tshirt-01/blue/Gemini_Generated_Image_at8dxoat8dxoat8d.png"
        ]
      }
    ]
  },

  // ── T-SHIRT 02 ────────────────────────────────────────────
  {
    id: 2,
    name: "T-Shirt 02",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/tshirt-02/black/front.jpg",
          "images/tshirts/tshirt-02/black/back.jpg"
        ]
      },
      {
        name: "White",
        hex: "#e5e5e5",
        images: [
          "images/tshirts/tshirt-02/white/front.jpg",
          "images/tshirts/tshirt-02/white/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 03 ────────────────────────────────────────────
  {
    id: 3,
    name: "T-Shirt 03",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/tshirt-03/black/front.jpg",
          "images/tshirts/tshirt-03/black/back.jpg"
        ]
      },
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/tshirt-03/navy/front.jpg",
          "images/tshirts/tshirt-03/navy/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 04 ────────────────────────────────────────────
  {
    id: 4,
    name: "T-Shirt 04",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Red",
        hex: "#cc2936",
        images: [
          "images/tshirts/tshirt-04/red/front.jpg",
          "images/tshirts/tshirt-04/red/back.jpg"
        ]
      },
      {
        name: "White",
        hex: "#e5e5e5",
        images: [
          "images/tshirts/tshirt-04/white/front.jpg",
          "images/tshirts/tshirt-04/white/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 05 ────────────────────────────────────────────
  {
    id: 5,
    name: "T-Shirt 05",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Blue",
        hex: "#2563eb",
        images: [
          "images/tshirts/tshirt-05/blue/front.jpg",
          "images/tshirts/tshirt-05/blue/back.jpg"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/tshirt-05/grey/front.jpg",
          "images/tshirts/tshirt-05/grey/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 06 ────────────────────────────────────────────
  {
    id: 6,
    name: "T-Shirt 06",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Green",
        hex: "#16a34a",
        images: [
          "images/tshirts/tshirt-06/green/front.jpg",
          "images/tshirts/tshirt-06/green/back.jpg"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/tshirt-06/black/front.jpg",
          "images/tshirts/tshirt-06/black/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 07 ────────────────────────────────────────────
  {
    id: 7,
    name: "T-Shirt 07",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Yellow",
        hex: "#facc15",
        images: [
          "images/tshirts/tshirt-07/yellow/front.jpg",
          "images/tshirts/tshirt-07/yellow/back.jpg"
        ]
      },
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/tshirt-07/navy/front.jpg",
          "images/tshirts/tshirt-07/navy/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 08 ────────────────────────────────────────────
  {
    id: 8,
    name: "T-Shirt 08",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/tshirt-08/maroon/front.jpg",
          "images/tshirts/tshirt-08/maroon/back.jpg"
        ]
      },
      {
        name: "White",
        hex: "#e5e5e5",
        images: [
          "images/tshirts/tshirt-08/white/front.jpg",
          "images/tshirts/tshirt-08/white/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 09 ────────────────────────────────────────────
  {
    id: 9,
    name: "T-Shirt 09",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Orange",
        hex: "#ea580c",
        images: [
          "images/tshirts/tshirt-09/orange/front.jpg",
          "images/tshirts/tshirt-09/orange/back.jpg"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/tshirt-09/black/front.jpg",
          "images/tshirts/tshirt-09/black/back.jpg"
        ]
      }
    ]
  },

  // ── T-SHIRT 10 ────────────────────────────────────────────
  {
    id: 10,
    name: "T-Shirt 10",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality tee from RangLoop. Update this description with real details — material, fit, and what makes it special.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/tshirt-10/grey/front.jpg",
          "images/tshirts/tshirt-10/grey/back.jpg"
        ]
      },
      {
        name: "Red",
        hex: "#cc2936",
        images: [
          "images/tshirts/tshirt-10/red/front.jpg",
          "images/tshirts/tshirt-10/red/back.jpg"
        ]
      }
    ]
  }

  // ← ADD YOUR NEXT T-SHIRT HERE (ids 11, 12, …)
  // Copy a block above, paste it here, change the id, name,
  // folder paths, and colours. Remember the comma after the
  // previous closing }.
];
