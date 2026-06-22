// ============================================================
// RangLoop — Product Data File
// ============================================================
// 
// HOW TO ADD A NEW PRODUCT (No coding experience needed!)
// -------------------------------------------------------
//
// Step 1: Add your product image files to the "images/" folder
//         (e.g., images/product3-front.jpg)
//
// Step 2: Open this file (js/products.js) in any text editor
//         (Notepad, VS Code, etc.)
//
// Step 3: Find the last product in the list below.
//         After its closing }, (including the comma), add:
//
//   {
//     id: 3,                          ← use the next number
//     name: "Your Product Name",
//     category: "T-Shirts",           ← must match a filter category exactly:
//                                        "T-Shirts" | "Hoodies" | "Mugs" | "Coasters" | "Caps"
//     price: 999,                     ← price in ₹, numbers only (no ₹ symbol here)
//     description: "Describe your product here. Material, fit, details, etc.",
//     images: [
//       "images/product3-front.jpg",  ← front view image filename
//       "images/product3-back.jpg",   ← back view (remove this line if you only have 1 image)
//       "images/product3-side.jpg"    ← side view (remove this line if you only have 2 images)
//     ],
//     sizes: ["S", "M", "L", "XL"]   ← remove sizes array entirely if product has no sizes (e.g., mugs)
//   },                                ← keep this comma if more products follow; remove if last
//
// Step 4: Save this file, then refresh your browser — new product appears automatically!
//
// IMPORTANT RULES:
//   - Every id must be unique (1, 2, 3, 4 ... don't repeat)
//   - Image filenames are case-sensitive: "Product1.jpg" ≠ "product1.jpg"
//   - Category must exactly match one of the filter tabs (spelling + capitalisation)
//   - Each line inside the object ends with a comma except the last line before }
//   - The whole products array ends with ];  — don't delete that line
//
// ============================================================

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality product from RangLoop. Update this description in js/products.js with the real product details — material, fit, and what makes it special.",
    images: [
      "images/pr1.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Product 2",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality product from RangLoop. Update this description in js/products.js with the real product details — material, fit, and what makes it special.",
    images: [
      "images/pr2.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    name: "Product 3",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality product from RangLoop. Update this description in js/products.js with the real product details — material, fit, and what makes it special.",
    images: [
      "images/pr3.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 4,
    name: "Product 4",
    category: "T-Shirts",
    price: 549,
    description: "Premium quality product from RangLoop. Update this description in js/products.js with the real product details — material, fit, and what makes it special.",
    images: [
      "images/pr4f.png",
      "images/pr4b.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  }

  // ← ADD YOUR NEXT PRODUCT HERE
  // Copy the block below, paste it above this comment (inside the array),
  // and fill in your details. Remember to add a comma after the } of the previous product.
  //
  // {
  //   id: 5,
  //   name: "Your Product Name",
  //   category: "T-Shirts",
  //   price: 000,
  //   description: "Your description here.",
  //   images: [
  //     "images/yourimage-front.jpg",
  //     "images/yourimage-back.jpg"   // ← remove this line if only 1 image
  //   ],
  //   sizes: ["S", "M", "L"]
  // }
];
