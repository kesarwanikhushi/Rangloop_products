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
    name: "Classic Black Tee",
    category: "T-Shirts",
    price: 549,
    description: "Premium 100% cotton tee with a custom RangLoop graphic print. Relaxed fit, pre-shrunk fabric, and double-stitched seams for durability. Available in multiple sizes — perfect for everyday wear.",
    images: [
      "images/product1-front.jpg",
      "images/product1-back.jpg",
      "images/product1-side.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "RangLoop Hoodie",
    category: "Hoodies",
    price: 1299,
    description: "Heavyweight 380 GSM fleece hoodie with embroidered RangLoop logo on the chest. Kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Built for comfort and built to last.",
    images: [
      "images/product2-front.jpg",
      "images/product2-back.jpg"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 3,
    name: "Minimal Logo Cap",
    category: "Caps",
    price: 449,
    description: "Structured 6-panel cap with a clean embroidered RangLoop wordmark. Adjustable snapback closure fits most heads. One size fits all.",
    images: [
      "images/product3-front.jpg",
      "images/product3-side.jpg"
    ],
    sizes: []
  },
  {
    id: 4,
    name: "Ceramic Mug — Black",
    category: "Mugs",
    price: 349,
    description: "11 oz ceramic mug with a crisp RangLoop print. Microwave and dishwasher safe. Pairs well with early mornings and late nights.",
    images: [
      "images/product4-front.jpg"
    ],
    sizes: []
  },
  {
    id: 5,
    name: "Cork Coaster Set",
    category: "Coasters",
    price: 299,
    description: "Set of 4 natural cork coasters with laser-engraved RangLoop design. Protects surfaces from heat and moisture. Each coaster is 10cm × 10cm.",
    images: [
      "images/product5-front.jpg"
    ],
    sizes: []
  }

  // ← ADD YOUR NEXT PRODUCT HERE
  // Copy the block below, paste it above this comment (inside the array),
  // and fill in your details. Remember to add a comma after the } of the previous product.
  //
  // {
  //   id: 6,
  //   name: "Your Product Name",
  //   category: "T-Shirts",
  //   price: 000,
  //   description: "Your description here.",
  //   images: [
  //     "images/product6-front.jpg"
  //   ],
  //   sizes: ["S", "M", "L"]
  // }
];
