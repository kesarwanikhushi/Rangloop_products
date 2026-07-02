// ============================================================
// RangLoop — Product Data File
// ============================================================
//
// HOW TO ADD / EDIT A T-SHIRT (No coding experience needed!)
// ----------------------------------------------------------
//
// FOLDER STRUCTURE:
//   images/tshirts/<Product Name>/<colour name>/<image file>
//
// STEP 1 — Add your images
//   Copy your photo files into the correct colour subfolder.
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
// COLOR SWATCH HEX CODES:
//   black      → #1a1a1a    white      → #f5f5f5
//   cream      → #f5efe0    off white  → #ece8e1
//   navy       → #1e3a5f    navy blue  → #1a2a4a
//   petrol blue→ #1b4d6e    blue       → #2563eb
//   maroon     → #7f1d1d    purple     → #6b21a8
//   olive      → #6b7c3a    green      → #16a34a
//   grey       → #9ca3af    yellow     → #facc15
//
// NOTE: The FIRST colour in the list shows on the catalog card.
//       Put your most eye-catching colour first!
//
// EVERY id MUST BE UNIQUE (1, 2, 3 … 10)
// ============================================================

const products = [

  // ── 01 — Whispers of Earth ────────────────────────────────
  {
    id: 1,
    name: "Whispers of Earth",
    category: "T-Shirts",
    price: 599,
    description: "Rooted in nature, worn with intention. Whispers of Earth carries the quiet language of the land — earthy tones, organic vibes, and a design that speaks before you do. 100% cotton, comfortable fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Green",
        hex: "#16a34a",
        images: [
          "images/tshirts/Whispers of Earth/green/ChatGPT Image Jun 26, 2026, 03_05_21 PM.webp",
          "images/tshirts/Whispers of Earth/green/ChatGPT Image Jun 26, 2026, 03_05_57 PM.webp",
          "images/tshirts/Whispers of Earth/green/Front_1_c_57.jpg",
          "images/tshirts/Whispers of Earth/green/Back_2_c_57.jpg"
        ]
      },
      {
        name: "Yellow",
        hex: "#facc15",
        images: [
          "images/tshirts/Whispers of Earth/yellow/ChatGPT Image Jun 26, 2026, 03_05_15 PM.webp",
          "images/tshirts/Whispers of Earth/yellow/ChatGPT Image Jun 26, 2026, 03_05_46 PM.webp",
          "images/tshirts/Whispers of Earth/yellow/Front_1_c_51.jpg",
          "images/tshirts/Whispers of Earth/yellow/Back_2_c_51.jpg"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/Whispers of Earth/cream/ChatGPT Image Jun 26, 2026, 03_05_41 PM.webp",
          "images/tshirts/Whispers of Earth/cream/ChatGPT Image Jun 26, 2026, 03_06_10 PM.webp",
          "images/tshirts/Whispers of Earth/cream/Front_1_c_48.jpg",
          "images/tshirts/Whispers of Earth/cream/Back_2_c_48.jpg"
        ]
      },
      {
        name: "Off White",
        hex: "#ece8e1",
        images: [
          "images/tshirts/Whispers of Earth/off white/ChatGPT Image Jun 26, 2026, 03_05_27 PM.webp",
          "images/tshirts/Whispers of Earth/off white/ChatGPT Image Jun 26, 2026, 03_06_03 PM.webp",
          "images/tshirts/Whispers of Earth/off white/Front_1_c_61.jpg",
          "images/tshirts/Whispers of Earth/off white/Back_2_c_61.jpg"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/Whispers of Earth/white/Front_1_c_1.jpg"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Whispers of Earth/black/ChatGPT Image Jun 26, 2026, 03_05_06 PM.webp",
          "images/tshirts/Whispers of Earth/black/ChatGPT Image Jun 26, 2026, 03_05_36 PM.webp",
          "images/tshirts/Whispers of Earth/black/Front_1_c_2.jpg",
          "images/tshirts/Whispers of Earth/black/Back_2_c_2.jpg"
        ]
      }
    ]
  },

  // ── 02 — Raw and Rooted ───────────────────────────────────
  {
    id: 2,
    name: "Raw and Rooted",
    category: "T-Shirts",
    price: 599,
    description: "Unfiltered. Unapologetic. Raw and Rooted is for those who are grounded in who they are. Bold graphics, earthy energy — this tee is a statement of identity. Premium soft-touch fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/Raw and Rooted/purple/ChatGPT Image Jun 26, 2026, 01_18_16 PM.webp",
          "images/tshirts/Raw and Rooted/purple/ChatGPT Image Jun 26, 2026, 01_18_49 PM.webp"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/Raw and Rooted/petrol blue/ChatGPT Image Jun 26, 2026, 01_18_22 PM.webp",
          "images/tshirts/Raw and Rooted/petrol blue/ChatGPT Image Jun 26, 2026, 01_18_55 PM.webp"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Raw and Rooted/black/ChatGPT Image Jun 26, 2026, 01_18_02 PM.webp",
          "images/tshirts/Raw and Rooted/black/ChatGPT Image Jun 26, 2026, 01_18_36 PM.webp",
          "images/tshirts/Raw and Rooted/black/pr3.webp"
        ]
      }
    ]
  },

  // ── 03 — Light & Shadow ───────────────────────────────────
  {
    id: 3,
    name: "Light & Shadow",
    category: "T-Shirts",
    price: 699,
    description: "Where contrast meets culture. Light & Shadow plays with duality — the interplay between what is seen and what is felt. A minimal yet powerful graphic that's rich in meaning. Pure cotton comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/Light & Shadow/navy/ChatGPT Image Jun 26, 2026, 01_27_09 PM.webp",
          "images/tshirts/Light & Shadow/navy/ChatGPT Image Jun 26, 2026, 01_27_35 PM.webp",
          "images/tshirts/Light & Shadow/navy/Left_Pocket_3_c_3.jpg",
          "images/tshirts/Light & Shadow/navy/Back_2_c_3.jpg"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Light & Shadow/black/ChatGPT Image Jun 26, 2026, 01_26_59 PM.webp",
          "images/tshirts/Light & Shadow/black/ChatGPT Image Jun 26, 2026, 01_27_24 PM.webp",
          "images/tshirts/Light & Shadow/black/Left_Pocket_3_c_2.jpg",
          "images/tshirts/Light & Shadow/black/Back_2_c_2.jpg"
        ]
      }
    ]
  },

  // ── 04 — Ride with the Light ──────────────────────────────
  {
    id: 4,
    name: "Ride with the Light",
    category: "T-Shirts",
    price: 699,
    description: "Chase the horizon. Ride with the Light is for the free spirits, the wanderers, the ones who move with purpose. A design that embodies motion and momentum. Breathable, durable fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/Ride with the Light/navy/back.webp",
          "images/tshirts/Ride with the Light/navy/ChatGPT Image Jun 26, 2026, 01_40_33 PM.webp",
          "images/tshirts/Ride with the Light/navy/Left_Pocket_3_c_3.jpg",
          "images/tshirts/Ride with the Light/navy/Back_2_c_3.jpg"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/Ride with the Light/maroon/ChatGPT Image Jun 26, 2026, 01_42_36 PM.webp",
          "images/tshirts/Ride with the Light/maroon/ChatGPT Image Jun 26, 2026, 01_40_42 PM.webp",
          "images/tshirts/Ride with the Light/maroon/Left_Pocket_3_c_25.jpg",
          "images/tshirts/Ride with the Light/maroon/Back_2_c_25.jpg"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Ride with the Light/black/ChatGPT Image Jun 26, 2026, 01_40_52 PM.webp",
          "images/tshirts/Ride with the Light/black/ChatGPT Image Jun 26, 2026, 01_40_22 PM.webp",
          "images/tshirts/Ride with the Light/black/Left_Pocket_3_c_2.jpg",
          "images/tshirts/Ride with the Light/black/Back_2_c_2.jpg"
        ]
      }
    ]
  },

  // ── 05 — Bhoota Kola ──────────────────────────────────────
  {
    id: 5,
    name: "Bhoota Kola",
    category: "T-Shirts",
    price: 649,
    description: "Inspired by the ancient spirit ritual of coastal Karnataka — Bhoota Kola. A tribute to tradition, folklore, and the power of ancestral culture. Wear the myth. Own the legend. Premium graphic tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Bhoota Kola/black/front.webp",
          "images/tshirts/Bhoota Kola/black/Front_1_c_2.jpg",
          "images/tshirts/Bhoota Kola/black/ChatGPT Image Jun 26, 2026, 02_44_24 PM.webp",
          "images/tshirts/Bhoota Kola/black/Back_2_c_2.jpg"
        ]
      },
      {
        name: "Yellow",
        hex: "#facc15",
        images: [
          "images/tshirts/Bhoota Kola/yellow/Front_1_c_43.jpg",
          "images/tshirts/Bhoota Kola/yellow/ChatGPT Image Jun 26, 2026, 02_44_11 PM.webp",
          "images/tshirts/Bhoota Kola/yellow/ChatGPT Image Jun 26, 2026, 02_45_13 PM.webp",
          "images/tshirts/Bhoota Kola/yellow/Back_2_c_43.jpg"
        ]
      },
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/Bhoota Kola/purple/Front_1_c_26.jpg",
          "images/tshirts/Bhoota Kola/purple/ChatGPT Image Jun 26, 2026, 02_44_53 PM.webp",
          "images/tshirts/Bhoota Kola/purple/ChatGPT Image Jun 26, 2026, 02_45_58 PM.webp",
          "images/tshirts/Bhoota Kola/purple/Back_2_c_26.jpg"
        ]
      },
      {
        name: "Blue",
        hex: "#2563eb",
        images: [
          "images/tshirts/Bhoota Kola/blue/Front_1_c_9.jpg",
          "images/tshirts/Bhoota Kola/blue/ChatGPT Image Jun 26, 2026, 02_44_39 PM.webp",
          "images/tshirts/Bhoota Kola/blue/ChatGPT Image Jun 26, 2026, 02_45_45 PM.webp",
          "images/tshirts/Bhoota Kola/blue/Back_2_c_9.jpg"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/Bhoota Kola/maroon/Front_1_c_25.jpg",
          "images/tshirts/Bhoota Kola/maroon/ChatGPT Image Jun 26, 2026, 02_44_46 PM.webp",
          "images/tshirts/Bhoota Kola/maroon/ChatGPT Image Jun 26, 2026, 02_45_51 PM.webp",
          "images/tshirts/Bhoota Kola/maroon/Back_2_c_25.jpg"
        ]
      },
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/Bhoota Kola/navy/Front_1_c_3.jpg",
          "images/tshirts/Bhoota Kola/navy/ChatGPT Image Jun 26, 2026, 02_44_33 PM.webp",
          "images/tshirts/Bhoota Kola/navy/ChatGPT Image Jun 26, 2026, 02_45_38 PM.webp",
          "images/tshirts/Bhoota Kola/navy/Back_2_c_3.jpg"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/Bhoota Kola/petrol blue/Front_1_c_38.jpg",
          "images/tshirts/Bhoota Kola/petrol blue/ChatGPT Image Jun 26, 2026, 02_44_59 PM.webp",
          "images/tshirts/Bhoota Kola/petrol blue/ChatGPT Image Jun 26, 2026, 02_45_26 PM.webp",
          "images/tshirts/Bhoota Kola/petrol blue/Back_2_c_38.jpg"
        ]
      },
      {
        name: "Olive",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/Bhoota Kola/olive/Front_1_c_41.jpg",
          "images/tshirts/Bhoota Kola/olive/ChatGPT Image Jun 26, 2026, 02_45_06 PM.webp",
          "images/tshirts/Bhoota Kola/olive/ChatGPT Image Jun 26, 2026, 02_45_32 PM.webp",
          "images/tshirts/Bhoota Kola/olive/Back_2_c_41.jpg"
        ]
      },
      {
        name: "Off White",
        hex: "#ece8e1",
        images: [
          "images/tshirts/Bhoota Kola/off white/Front_1_c_61.jpg",
          "images/tshirts/Bhoota Kola/off white/Back_2_c_61.jpg"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/Bhoota Kola/white/Front_1_c_1.jpg",
          "images/tshirts/Bhoota Kola/white/Back_2_c_1.jpg"
        ]
      }
    ]
  },

  // ── 06 — Lion ─────────────────────────────────────────────
  {
    id: 6,
    name: "Lion",
    category: "T-Shirts",
    price: 549,
    description: "Lead with courage. The Lion tee channels raw power and quiet confidence. A bold, artistic rendition of the king of the jungle — crafted for those who carry their pride with grace. Heavy-weight cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Lion/black/ChatGPT Image Jun 26, 2026, 03_19_12 PM.webp",
          "images/tshirts/Lion/black/ChatGPT Image Jun 26, 2026, 03_20_55 PM.webp",
          "images/tshirts/Lion/black/pr1.webp"
        ]
      }
    ]
  },

  // ── 07 — Maa ──────────────────────────────────────────────
  {
    id: 7,
    name: "Maa",
    category: "T-Shirts",
    price: 599,
    description: "A love letter to every mother. Maa is more than a word — it's the universe condensed into one. This tee honours the strength, grace, and warmth of motherhood through thoughtful, heart-driven design.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/Maa/purple/ChatGPT Image Jun 26, 2026, 03_52_28 PM.webp",
          "images/tshirts/Maa/purple/ChatGPT Image Jun 26, 2026, 03_52_58 PM.webp",
          "images/tshirts/Maa/purple/Front_1_c_26.jpg",
          "images/tshirts/Maa/purple/Back_2_c_26.jpg"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/Maa/petrol blue/ChatGPT Image Jun 26, 2026, 03_52_25 PM.webp",
          "images/tshirts/Maa/petrol blue/ChatGPT Image Jun 26, 2026, 03_52_51 PM.webp",
          "images/tshirts/Maa/petrol blue/Front_1_c_38.jpg",
          "images/tshirts/Maa/petrol blue/Back_2_c_38.jpg"
        ]
      },
      {
        name: "Olive",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/Maa/olive/ChatGPT Image Jun 26, 2026, 03_52_19 PM.webp",
          "images/tshirts/Maa/olive/ChatGPT Image Jun 26, 2026, 03_52_45 PM.webp",
          "images/tshirts/Maa/olive/Front_1_c_41.jpg",
          "images/tshirts/Maa/olive/Back_2_c_41.jpg"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/Maa/maroon/ChatGPT Image Jun 26, 2026, 03_52_15 PM.webp",
          "images/tshirts/Maa/maroon/ChatGPT Image Jun 26, 2026, 03_52_42 PM.webp",
          "images/tshirts/Maa/maroon/Front_1_c_25.jpg",
          "images/tshirts/Maa/maroon/Back_2_c_25.jpg"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/Maa/white/ChatGPT Image Jun 26, 2026, 03_52_22 PM.webp",
          "images/tshirts/Maa/white/ChatGPT Image Jun 26, 2026, 03_52_48 PM.webp",
          "images/tshirts/Maa/white/Front_1_c_1.jpg",
          "images/tshirts/Maa/white/Back_2_c_1.jpg"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/Maa/navy blue/Front_1_c_3.jpg",
          "images/tshirts/Maa/navy blue/Back_2_c_3.jpg"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Maa/black/ChatGPT Image Jun 26, 2026, 03_52_11 PM.webp",
          "images/tshirts/Maa/black/ChatGPT Image Jun 26, 2026, 03_52_38 PM.webp",
          "images/tshirts/Maa/black/Front_1_c_2.jpg",
          "images/tshirts/Maa/black/Back_2_c_2.jpg"
        ]
      }
    ]
  },

  // ── 08 — Aham Agni ────────────────────────────────────────
  {
    id: 8,
    name: "Aham Agni",
    category: "T-Shirts",
    price: 699,
    description: "\"I am fire.\" Aham Agni is drawn from Sanskrit — a declaration of inner flame, creative force, and transformative energy. For those who burn bright and create with passion. Premium oversized fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/Aham Agni/maroon/ChatGPT Image Jun 26, 2026, 03_40_51 PM.webp",
          "images/tshirts/Aham Agni/maroon/ChatGPT Image Jun 26, 2026, 03_41_08 PM.webp",
          "images/tshirts/Aham Agni/maroon/Left_Pocket_3_c_25.jpg",
          "images/tshirts/Aham Agni/maroon/Back_2_c_25.jpg"
        ]
      },
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/Aham Agni/navy/ChatGPT Image Jun 26, 2026, 03_40_59 PM.webp",
          "images/tshirts/Aham Agni/navy/ChatGPT Image Jun 26, 2026, 03_41_16 PM.webp",
          "images/tshirts/Aham Agni/navy/Left_Pocket_3_c_3.jpg",
          "images/tshirts/Aham Agni/navy/Back_2_c_3.jpg"
        ]
      },
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/Aham Agni/purple/Left_Pocket_3_c_26.jpg",
          "images/tshirts/Aham Agni/purple/Back_2_c_26.jpg"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/Aham Agni/cream/ChatGPT Image Jun 26, 2026, 03_40_48 PM.webp",
          "images/tshirts/Aham Agni/cream/Back_2_c_61.jpg"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/Aham Agni/white/ChatGPT Image Jun 26, 2026, 03_40_56 PM.webp",
          "images/tshirts/Aham Agni/white/ChatGPT Image Jun 26, 2026, 03_41_13 PM.webp",
          "images/tshirts/Aham Agni/white/Left_Pocket_3_c_1.jpg",
          "images/tshirts/Aham Agni/white/Back_2_c_1.jpg"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/Aham Agni/grey/Back_2_c_4.jpg"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/Aham Agni/black/ChatGPT Image Jun 26, 2026, 03_41_04 PM.webp",
          "images/tshirts/Aham Agni/black/ChatGPT Image Jun 26, 2026, 03_41_19 PM.webp",
          "images/tshirts/Aham Agni/black/Left_Pocket_3_c_2.jpg",
          "images/tshirts/Aham Agni/black/Back_2_c_2.jpg"
        ]
      }
    ]
  },

  // ── 09 — Surya Namaskar ───────────────────────────────────
  {
    id: 9,
    name: "Surya Namaskar",
    category: "T-Shirts",
    price: 549,
    description: "Greet the sun. Surya Namaskar channels the ancient practice of sun salutation — a ritual of gratitude, movement, and connection with life's energy. Wear your morning ritual. Breathable, soft cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/Surya namaskar/cream/ChatGPT Image Jun 26, 2026, 04_21_02 PM.webp",
          "images/tshirts/Surya namaskar/cream/ChatGPT Image Jun 26, 2026, 04_21_20 PM.webp",
          "images/tshirts/Surya namaskar/cream/Back_2_c_61.jpg",
          "images/tshirts/Surya namaskar/cream/default.jpg"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/Surya namaskar/white/ChatGPT Image Jun 26, 2026, 04_20_59 PM.webp",
          "images/tshirts/Surya namaskar/white/ChatGPT Image Jun 26, 2026, 04_21_24 PM.webp",
          "images/tshirts/Surya namaskar/white/Front_1_c_1.jpg",
          "images/tshirts/Surya namaskar/white/Back_2_c_1.jpg"
        ]
      }
    ]
  },

  // ── 10 — Different Path Same Roots ────────────────────────
  {
    id: 10,
    name: "Different Path Same Roots",
    category: "T-Shirts",
    price: 649,
    description: "We may take different paths in life, but we share the same roots. A design celebrating diversity, connection, and the invisible threads that bind us. For friends, families, and communities. Unisex fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/Different path Same roots/grey/ChatGPT Image Jun 26, 2026, 04_19_54 PM.webp",
          "images/tshirts/Different path Same roots/grey/ChatGPT Image Jun 26, 2026, 04_20_13 PM.webp",
          "images/tshirts/Different path Same roots/grey/Back_2_c_4.jpg"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/Different path Same roots/cream/ChatGPT Image Jun 26, 2026, 04_19_59 PM.webp",
          "images/tshirts/Different path Same roots/cream/ChatGPT Image Jun 26, 2026, 04_20_16 PM.webp",
          "images/tshirts/Different path Same roots/cream/Front_1_c_61.jpg",
          "images/tshirts/Different path Same roots/cream/Back_2_c_61.jpg"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/Different path Same roots/white/ChatGPT Image Jun 26, 2026, 04_19_50 PM.webp",
          "images/tshirts/Different path Same roots/white/ChatGPT Image Jun 26, 2026, 04_20_07 PM.webp",
          "images/tshirts/Different path Same roots/white/Front_1_c_1.jpg",
          "images/tshirts/Different path Same roots/white/Back_2_c_1.jpg"
        ]
      }
    ]
  }

  // ← ADD YOUR NEXT T-SHIRT HERE (ids 11, 12, …)
  // Copy a block above, paste it here, change the id, name,
  // folder paths, and colours. Remember the comma after the
  // previous closing }.
];
