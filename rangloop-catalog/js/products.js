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
    category: "Indian Culture",
    price: 599,
    description: "Rooted in nature, worn with intention. Whispers of Earth carries the quiet language of the land — earthy tones, organic vibes, and a design that speaks before you do. 100% cotton, comfortable fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Green",
        hex: "#16a34a",
        images: [
          "images/tshirts/indian culture/Whispers of Earth/green/ChatGPT Image Jun 26, 2026, 03_05_21 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/green/ChatGPT Image Jun 26, 2026, 03_05_57 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/green/Front_1_c_57.webp",
          "images/tshirts/indian culture/Whispers of Earth/green/Back_2_c_57.webp"
        ]
      },
      {
        name: "Yellow",
        hex: "#facc15",
        images: [
          "images/tshirts/indian culture/Whispers of Earth/yellow/ChatGPT Image Jun 26, 2026, 03_05_15 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/yellow/ChatGPT Image Jun 26, 2026, 03_05_46 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/yellow/Front_1_c_51.webp",
          "images/tshirts/indian culture/Whispers of Earth/yellow/Back_2_c_51.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/indian culture/Whispers of Earth/cream/ChatGPT Image Jun 26, 2026, 03_05_41 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/cream/ChatGPT Image Jun 26, 2026, 03_06_10 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/cream/Front_1_c_48.webp",
          "images/tshirts/indian culture/Whispers of Earth/cream/Back_2_c_48.webp"
        ]
      },
      {
        name: "Off White",
        hex: "#ece8e1",
        images: [
          "images/tshirts/indian culture/Whispers of Earth/off white/ChatGPT Image Jun 26, 2026, 03_05_27 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/off white/ChatGPT Image Jun 26, 2026, 03_06_03 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/off white/Front_1_c_61.webp",
          "images/tshirts/indian culture/Whispers of Earth/off white/Back_2_c_61.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/indian culture/Whispers of Earth/white/Front_1_c_1.webp"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Whispers of Earth/black/ChatGPT Image Jun 26, 2026, 03_05_06 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/black/ChatGPT Image Jun 26, 2026, 03_05_36 PM.webp",
          "images/tshirts/indian culture/Whispers of Earth/black/Front_1_c_2.webp",
          "images/tshirts/indian culture/Whispers of Earth/black/Back_2_c_2.webp"
        ]
      }
    ]
  },

  // ── 02 — Raw and Rooted ───────────────────────────────────
  {
    id: 2,
    name: "Raw and Rooted",
    category: "Indian Culture",
    price: 599,
    description: "Unfiltered. Unapologetic. Raw and Rooted is for those who are grounded in who they are. Bold graphics, earthy energy — this tee is a statement of identity. Premium soft-touch fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/indian culture/Raw and Rooted/purple/ChatGPT Image Jun 26, 2026, 01_18_16 PM.webp",
          "images/tshirts/indian culture/Raw and Rooted/purple/ChatGPT Image Jun 26, 2026, 01_18_49 PM.webp"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/indian culture/Raw and Rooted/petrol blue/ChatGPT Image Jun 26, 2026, 01_18_22 PM.webp",
          "images/tshirts/indian culture/Raw and Rooted/petrol blue/ChatGPT Image Jun 26, 2026, 01_18_55 PM.webp"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Raw and Rooted/black/ChatGPT Image Jun 26, 2026, 01_18_02 PM.webp",
          "images/tshirts/indian culture/Raw and Rooted/black/ChatGPT Image Jun 26, 2026, 01_18_36 PM.webp",
          "images/tshirts/indian culture/Raw and Rooted/black/pr3.webp"
        ]
      }
    ]
  },

  // ── 03 — Light & Shadow ───────────────────────────────────
  {
    id: 3,
    name: "Light & Shadow",
    category: "Indian Culture",
    price: 699,
    description: "Where contrast meets culture. Light & Shadow plays with duality — the interplay between what is seen and what is felt. A minimal yet powerful graphic that's rich in meaning. Pure cotton comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/indian culture/Light & Shadow/navy/ChatGPT Image Jun 26, 2026, 01_27_09 PM.webp",
          "images/tshirts/indian culture/Light & Shadow/navy/ChatGPT Image Jun 26, 2026, 01_27_35 PM.webp",
          "images/tshirts/indian culture/Light & Shadow/navy/Left_Pocket_3_c_3.webp",
          "images/tshirts/indian culture/Light & Shadow/navy/Back_2_c_3.webp"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Light & Shadow/black/ChatGPT Image Jun 26, 2026, 01_26_59 PM.webp",
          "images/tshirts/indian culture/Light & Shadow/black/ChatGPT Image Jun 26, 2026, 01_27_24 PM.webp",
          "images/tshirts/indian culture/Light & Shadow/black/Left_Pocket_3_c_2.webp",
          "images/tshirts/indian culture/Light & Shadow/black/Back_2_c_2.webp"
        ]
      }
    ]
  },

  // ── 04 — Ride with the Light ──────────────────────────────
  {
    id: 4,
    name: "Ride with the Light",
    category: "Indian Culture",
    price: 699,
    description: "Chase the horizon. Ride with the Light is for the free spirits, the wanderers, the ones who move with purpose. A design that embodies motion and momentum. Breathable, durable fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/indian culture/Ride with the Light/navy/back.webp",
          "images/tshirts/indian culture/Ride with the Light/navy/ChatGPT Image Jun 26, 2026, 01_40_33 PM.webp",
          "images/tshirts/indian culture/Ride with the Light/navy/Left_Pocket_3_c_3.webp",
          "images/tshirts/indian culture/Ride with the Light/navy/Back_2_c_3.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/indian culture/Ride with the Light/maroon/ChatGPT Image Jun 26, 2026, 01_42_36 PM.webp",
          "images/tshirts/indian culture/Ride with the Light/maroon/ChatGPT Image Jun 26, 2026, 01_40_42 PM.webp",
          "images/tshirts/indian culture/Ride with the Light/maroon/Left_Pocket_3_c_25.webp",
          "images/tshirts/indian culture/Ride with the Light/maroon/Back_2_c_25.webp"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Ride with the Light/black/ChatGPT Image Jun 26, 2026, 01_40_52 PM.webp",
          "images/tshirts/indian culture/Ride with the Light/black/ChatGPT Image Jun 26, 2026, 01_40_22 PM.webp",
          "images/tshirts/indian culture/Ride with the Light/black/Left_Pocket_3_c_2.webp",
          "images/tshirts/indian culture/Ride with the Light/black/Back_2_c_2.webp"
        ]
      }
    ]
  },

  // ── 05 — Bhoota Kola ──────────────────────────────────────
  {
    id: 5,
    name: "Bhoota Kola",
    category: "Indian Culture",
    price: 649,
    description: "Inspired by the ancient spirit ritual of coastal Karnataka — Bhoota Kola. A tribute to tradition, folklore, and the power of ancestral culture. Wear the myth. Own the legend. Premium graphic tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/black/front.webp",
          "images/tshirts/indian culture/Bhoota Kola/black/Front_1_c_2.webp",
          "images/tshirts/indian culture/Bhoota Kola/black/ChatGPT Image Jun 26, 2026, 02_44_24 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/black/Back_2_c_2.webp"
        ]
      },
      {
        name: "Yellow",
        hex: "#facc15",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/yellow/Front_1_c_43.webp",
          "images/tshirts/indian culture/Bhoota Kola/yellow/ChatGPT Image Jun 26, 2026, 02_44_11 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/yellow/ChatGPT Image Jun 26, 2026, 02_45_13 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/yellow/Back_2_c_43.webp"
        ]
      },
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/purple/Front_1_c_26.webp",
          "images/tshirts/indian culture/Bhoota Kola/purple/ChatGPT Image Jun 26, 2026, 02_44_53 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/purple/ChatGPT Image Jun 26, 2026, 02_45_58 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/purple/Back_2_c_26.webp"
        ]
      },
      {
        name: "Blue",
        hex: "#2563eb",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/blue/Front_1_c_9.webp",
          "images/tshirts/indian culture/Bhoota Kola/blue/ChatGPT Image Jun 26, 2026, 02_44_39 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/blue/ChatGPT Image Jun 26, 2026, 02_45_45 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/blue/Back_2_c_9.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/maroon/Front_1_c_25.webp",
          "images/tshirts/indian culture/Bhoota Kola/maroon/ChatGPT Image Jun 26, 2026, 02_44_46 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/maroon/ChatGPT Image Jun 26, 2026, 02_45_51 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/maroon/Back_2_c_25.webp"
        ]
      },
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/navy/Front_1_c_3.webp",
          "images/tshirts/indian culture/Bhoota Kola/navy/ChatGPT Image Jun 26, 2026, 02_44_33 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/navy/ChatGPT Image Jun 26, 2026, 02_45_38 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/navy/Back_2_c_3.webp"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/petrol blue/Front_1_c_38.webp",
          "images/tshirts/indian culture/Bhoota Kola/petrol blue/ChatGPT Image Jun 26, 2026, 02_44_59 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/petrol blue/ChatGPT Image Jun 26, 2026, 02_45_26 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/petrol blue/Back_2_c_38.webp"
        ]
      },
      {
        name: "Olive",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/olive/Front_1_c_41.webp",
          "images/tshirts/indian culture/Bhoota Kola/olive/ChatGPT Image Jun 26, 2026, 02_45_06 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/olive/ChatGPT Image Jun 26, 2026, 02_45_32 PM.webp",
          "images/tshirts/indian culture/Bhoota Kola/olive/Back_2_c_41.webp"
        ]
      },
      {
        name: "Off White",
        hex: "#ece8e1",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/off white/Front_1_c_61.webp",
          "images/tshirts/indian culture/Bhoota Kola/off white/Back_2_c_61.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/indian culture/Bhoota Kola/white/Front_1_c_1.webp",
          "images/tshirts/indian culture/Bhoota Kola/white/Back_2_c_1.webp"
        ]
      }
    ]
  },

  // ── 06 — Lion ─────────────────────────────────────────────
  {
    id: 6,
    name: "Lion",
    category: "Indian Culture",
    price: 549,
    description: "Lead with courage. The Lion tee channels raw power and quiet confidence. A bold, artistic rendition of the king of the jungle — crafted for those who carry their pride with grace. Heavy-weight cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Lion/black/ChatGPT Image Jun 26, 2026, 03_19_12 PM.webp",
          "images/tshirts/indian culture/Lion/black/ChatGPT Image Jun 26, 2026, 03_20_55 PM.webp",
          "images/tshirts/indian culture/Lion/black/pr1.webp"
        ]
      }
    ]
  },

  // ── 07 — Maa ──────────────────────────────────────────────
  {
    id: 7,
    name: "Maa",
    category: "Indian Culture",
    price: 599,
    description: "A love letter to every mother. Maa is more than a word — it's the universe condensed into one. This tee honours the strength, grace, and warmth of motherhood through thoughtful, heart-driven design.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/indian culture/Maa/purple/ChatGPT Image Jun 26, 2026, 03_52_28 PM.webp",
          "images/tshirts/indian culture/Maa/purple/ChatGPT Image Jun 26, 2026, 03_52_58 PM.webp",
          "images/tshirts/indian culture/Maa/purple/Front_1_c_26.webp",
          "images/tshirts/indian culture/Maa/purple/Back_2_c_26.webp"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/indian culture/Maa/petrol blue/ChatGPT Image Jun 26, 2026, 03_52_25 PM.webp",
          "images/tshirts/indian culture/Maa/petrol blue/ChatGPT Image Jun 26, 2026, 03_52_51 PM.webp",
          "images/tshirts/indian culture/Maa/petrol blue/Front_1_c_38.webp",
          "images/tshirts/indian culture/Maa/petrol blue/Back_2_c_38.webp"
        ]
      },
      {
        name: "Olive",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/indian culture/Maa/olive/ChatGPT Image Jun 26, 2026, 03_52_19 PM.webp",
          "images/tshirts/indian culture/Maa/olive/ChatGPT Image Jun 26, 2026, 03_52_45 PM.webp",
          "images/tshirts/indian culture/Maa/olive/Front_1_c_41.webp",
          "images/tshirts/indian culture/Maa/olive/Back_2_c_41.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/indian culture/Maa/maroon/ChatGPT Image Jun 26, 2026, 03_52_15 PM.webp",
          "images/tshirts/indian culture/Maa/maroon/ChatGPT Image Jun 26, 2026, 03_52_42 PM.webp",
          "images/tshirts/indian culture/Maa/maroon/Front_1_c_25.webp",
          "images/tshirts/indian culture/Maa/maroon/Back_2_c_25.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/indian culture/Maa/white/ChatGPT Image Jun 26, 2026, 03_52_22 PM.webp",
          "images/tshirts/indian culture/Maa/white/ChatGPT Image Jun 26, 2026, 03_52_48 PM.webp",
          "images/tshirts/indian culture/Maa/white/Front_1_c_1.webp",
          "images/tshirts/indian culture/Maa/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/indian culture/Maa/navy blue/Front_1_c_3.webp",
          "images/tshirts/indian culture/Maa/navy blue/Back_2_c_3.webp"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Maa/black/ChatGPT Image Jun 26, 2026, 03_52_11 PM.webp",
          "images/tshirts/indian culture/Maa/black/ChatGPT Image Jun 26, 2026, 03_52_38 PM.webp",
          "images/tshirts/indian culture/Maa/black/Front_1_c_2.webp",
          "images/tshirts/indian culture/Maa/black/Back_2_c_2.webp"
        ]
      }
    ]
  },

  // ── 08 — Aham Agni ────────────────────────────────────────
  {
    id: 8,
    name: "Aham Agni",
    category: "Indian Culture",
    price: 699,
    description: "\"I am fire.\" Aham Agni is drawn from Sanskrit — a declaration of inner flame, creative force, and transformative energy. For those who burn bright and create with passion. Premium oversized fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/indian culture/Aham Agni/maroon/ChatGPT Image Jun 26, 2026, 03_40_51 PM.webp",
          "images/tshirts/indian culture/Aham Agni/maroon/ChatGPT Image Jun 26, 2026, 03_41_08 PM.webp",
          "images/tshirts/indian culture/Aham Agni/maroon/Left_Pocket_3_c_25.webp",
          "images/tshirts/indian culture/Aham Agni/maroon/Back_2_c_25.webp"
        ]
      },
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/indian culture/Aham Agni/navy/ChatGPT Image Jun 26, 2026, 03_40_59 PM.webp",
          "images/tshirts/indian culture/Aham Agni/navy/ChatGPT Image Jun 26, 2026, 03_41_16 PM.webp",
          "images/tshirts/indian culture/Aham Agni/navy/Left_Pocket_3_c_3.webp",
          "images/tshirts/indian culture/Aham Agni/navy/Back_2_c_3.webp"
        ]
      },
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/indian culture/Aham Agni/purple/Left_Pocket_3_c_26.webp",
          "images/tshirts/indian culture/Aham Agni/purple/Back_2_c_26.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/indian culture/Aham Agni/cream/ChatGPT Image Jun 26, 2026, 03_40_48 PM.webp",
          "images/tshirts/indian culture/Aham Agni/cream/Back_2_c_61.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/indian culture/Aham Agni/white/ChatGPT Image Jun 26, 2026, 03_40_56 PM.webp",
          "images/tshirts/indian culture/Aham Agni/white/ChatGPT Image Jun 26, 2026, 03_41_13 PM.webp",
          "images/tshirts/indian culture/Aham Agni/white/Left_Pocket_3_c_1.webp",
          "images/tshirts/indian culture/Aham Agni/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/indian culture/Aham Agni/grey/Back_2_c_4.webp"
        ]
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/indian culture/Aham Agni/black/ChatGPT Image Jun 26, 2026, 03_41_04 PM.webp",
          "images/tshirts/indian culture/Aham Agni/black/ChatGPT Image Jun 26, 2026, 03_41_19 PM.webp",
          "images/tshirts/indian culture/Aham Agni/black/Left_Pocket_3_c_2.webp",
          "images/tshirts/indian culture/Aham Agni/black/Back_2_c_2.webp"
        ]
      }
    ]
  },

  // ── 09 — Surya Namaskar ───────────────────────────────────
  {
    id: 9,
    name: "Surya Namaskar",
    category: "Indian Culture",
    price: 549,
    description: "Greet the sun. Surya Namaskar channels the ancient practice of sun salutation — a ritual of gratitude, movement, and connection with life's energy. Wear your morning ritual. Breathable, soft cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/indian culture/Surya namaskar/cream/ChatGPT Image Jun 26, 2026, 04_21_02 PM.webp",
          "images/tshirts/indian culture/Surya namaskar/cream/ChatGPT Image Jun 26, 2026, 04_21_20 PM.webp",
          "images/tshirts/indian culture/Surya namaskar/cream/Back_2_c_61.webp",
          "images/tshirts/indian culture/Surya namaskar/cream/default.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/indian culture/Surya namaskar/white/ChatGPT Image Jun 26, 2026, 04_20_59 PM.webp",
          "images/tshirts/indian culture/Surya namaskar/white/ChatGPT Image Jun 26, 2026, 04_21_24 PM.webp",
          "images/tshirts/indian culture/Surya namaskar/white/Front_1_c_1.webp",
          "images/tshirts/indian culture/Surya namaskar/white/Back_2_c_1.webp"
        ]
      }
    ]
  },

  // ── 10 — Different Path Same Roots ────────────────────────
  {
    id: 10,
    name: "Different Path Same Roots",
    category: "Indian Culture",
    price: 649,
    description: "We may take different paths in life, but we share the same roots. A design celebrating diversity, connection, and the invisible threads that bind us. For friends, families, and communities. Unisex fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/indian culture/Different path Same roots/grey/ChatGPT Image Jun 26, 2026, 04_19_54 PM.webp",
          "images/tshirts/indian culture/Different path Same roots/grey/ChatGPT Image Jun 26, 2026, 04_20_13 PM.webp",
          "images/tshirts/indian culture/Different path Same roots/grey/Back_2_c_4.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/indian culture/Different path Same roots/cream/ChatGPT Image Jun 26, 2026, 04_19_59 PM.webp",
          "images/tshirts/indian culture/Different path Same roots/cream/ChatGPT Image Jun 26, 2026, 04_20_16 PM.webp",
          "images/tshirts/indian culture/Different path Same roots/cream/Front_1_c_61.webp",
          "images/tshirts/indian culture/Different path Same roots/cream/Back_2_c_61.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/indian culture/Different path Same roots/white/ChatGPT Image Jun 26, 2026, 04_19_50 PM.webp",
          "images/tshirts/indian culture/Different path Same roots/white/ChatGPT Image Jun 26, 2026, 04_20_07 PM.webp",
          "images/tshirts/indian culture/Different path Same roots/white/Front_1_c_1.webp",
          "images/tshirts/indian culture/Different path Same roots/white/Back_2_c_1.webp"
        ]
      }
    ]
  }

  // ─────────────────────────────────────────────────────────
  // ANIME COLLECTION  (ids 11 – 20)
  // ─────────────────────────────────────────────────────────

  ,

  // ── 11 — Stillness ────────────────────────────────────────
  {
    id: 11,
    name: "Stillness",
    category: "Anime",
    price: 699,
    description: "In the chaos of battle, stillness is power. Stillness captures the quiet before the storm — the breath, the focus, the moment before everything changes. A design for those who move with intention. 100% premium cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/Stillness/white/ChatGPT Image Jul 5, 2026, 02_30_17 PM.webp",
          "images/tshirts/anime/Stillness/white/ChatGPT Image Jul 5, 2026, 02_29_54 PM.webp",
          "images/tshirts/anime/Stillness/white/Left_Pocket_3_c_1.webp",
          "images/tshirts/anime/Stillness/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Baby Pink",
        hex: "#f4a7b9",
        images: [
          "images/tshirts/anime/Stillness/baby pink/ChatGPT Image Jul 5, 2026, 02_30_00 PM.webp",
          "images/tshirts/anime/Stillness/baby pink/ChatGPT Image Jul 5, 2026, 02_30_22 PM.webp",
          "images/tshirts/anime/Stillness/baby pink/Left_Pocket_3_c_45.webp",
          "images/tshirts/anime/Stillness/baby pink/Back_2_c_45.webp"
        ]
      },
      {
        name: "Lavender",
        hex: "#c4a9d1",
        images: [
          "images/tshirts/anime/Stillness/lavender/ChatGPT Image Jul 5, 2026, 02_30_06 PM.webp",
          "images/tshirts/anime/Stillness/lavender/ChatGPT Image Jul 5, 2026, 02_30_30 PM.webp",
          "images/tshirts/anime/Stillness/lavender/Left_Pocket_3_c_49.webp",
          "images/tshirts/anime/Stillness/lavender/Back_2_c_49.webp"
        ]
      },
      {
        name: "Coral",
        hex: "#e8735a",
        images: [
          "images/tshirts/anime/Stillness/coral/ChatGPT Image Jul 5, 2026, 02_30_11 PM.webp",
          "images/tshirts/anime/Stillness/coral/ChatGPT Image Jul 5, 2026, 02_30_35 PM.webp",
          "images/tshirts/anime/Stillness/coral/Left_Pocket_3_c_52.webp",
          "images/tshirts/anime/Stillness/coral/Back_2_c_52.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/Stillness/cream/ChatGPT Image Jul 5, 2026, 02_30_41 PM.webp",
          "images/tshirts/anime/Stillness/cream/Left_Pocket_3_c_61.webp",
          "images/tshirts/anime/Stillness/cream/Back_2_c_61.webp"
        ]
      }
    ]
  },

  // ── 12 — Ronin 2099 ───────────────────────────────────────
  {
    id: 12,
    name: "Ronin 2099",
    category: "Anime",
    price: 649,
    description: "A warrior without a master. Ronin 2099 blends cyberpunk aesthetics with the ancient spirit of the masterless samurai — bold, futuristic, and utterly alone. For those who carve their own path. Premium graphic tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/Ronin 2099/white/ChatGPT Image Jul 5, 2026, 02_16_07 PM.webp",
          "images/tshirts/anime/Ronin 2099/white/Front_1_c_1.webp",
          "images/tshirts/anime/Ronin 2099/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/anime/Ronin 2099/grey/ChatGPT Image Jul 5, 2026, 02_16_13 PM.webp",
          "images/tshirts/anime/Ronin 2099/grey/Front_1_c_4.webp",
          "images/tshirts/anime/Ronin 2099/grey/Back_2_c_4.webp"
        ]
      },
      {
        name: "Mint",
        hex: "#98d4c8",
        images: [
          "images/tshirts/anime/Ronin 2099/mint/ChatGPT Image Jul 5, 2026, 02_15_54 PM.webp",
          "images/tshirts/anime/Ronin 2099/mint/Front_1_c_53.webp",
          "images/tshirts/anime/Ronin 2099/mint/Back_2_c_53.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/Ronin 2099/cream/ChatGPT Image Jul 5, 2026, 02_16_01 PM.webp",
          "images/tshirts/anime/Ronin 2099/cream/Front_1_c_61.webp",
          "images/tshirts/anime/Ronin 2099/cream/Back_2_c_61.webp"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/anime/Ronin 2099/petrol blue/ChatGPT Image Jul 5, 2026, 02_16_27 PM.webp",
          "images/tshirts/anime/Ronin 2099/petrol blue/Front_1_c_38.webp",
          "images/tshirts/anime/Ronin 2099/petrol blue/Back_2_c_38.webp"
        ]
      },
      {
        name: "Red",
        hex: "#dc2626",
        images: [
          "images/tshirts/anime/Ronin 2099/red/ChatGPT Image Jul 5, 2026, 02_16_20 PM.webp",
          "images/tshirts/anime/Ronin 2099/red/Front_1_c_10.webp",
          "images/tshirts/anime/Ronin 2099/red/Back_2_c_10.webp"
        ]
      },
      {
        name: "Lavender",
        hex: "#c4a9d1",
        images: [
          "images/tshirts/anime/Ronin 2099/lavender/Front_1_c_49.webp",
          "images/tshirts/anime/Ronin 2099/lavender/Back_2_c_49.webp"
        ]
      },
      {
        name: "Baby Pink",
        hex: "#f4a7b9",
        images: [
          "images/tshirts/anime/Ronin 2099/baby pink/Front_1_c_45.webp",
          "images/tshirts/anime/Ronin 2099/baby pink/Back_2_c_45.webp"
        ]
      },
      {
        name: "Coral",
        hex: "#e8735a",
        images: [
          "images/tshirts/anime/Ronin 2099/coral/Front_1_c_52.webp",
          "images/tshirts/anime/Ronin 2099/coral/Back_2_c_52.webp"
        ]
      }
    ]
  },

  // ── 13 — Dragon ───────────────────────────────────────────
  {
    id: 13,
    name: "Dragon",
    category: "Anime",
    price: 749,
    description: "Ancient power. Endless sky. Dragon channels the primal force of the legendary beasts — fierce, majestic, and unstoppable. A bold graphic for those who carry fire within them. Heavy-weight cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/Dragon/white/ChatGPT Image Jul 5, 2026, 02_03_51 PM.webp",
          "images/tshirts/anime/Dragon/white/ChatGPT Image Jul 5, 2026, 02_04_25 PM.webp",
          "images/tshirts/anime/Dragon/white/Front_1_c_1.webp",
          "images/tshirts/anime/Dragon/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/anime/Dragon/grey/ChatGPT Image Jul 5, 2026, 02_03_56 PM.webp",
          "images/tshirts/anime/Dragon/grey/ChatGPT Image Jul 5, 2026, 02_04_35 PM.webp",
          "images/tshirts/anime/Dragon/grey/Front_1_c_4.webp",
          "images/tshirts/anime/Dragon/grey/Back_2_c_4.webp"
        ]
      },
      {
        name: "Pink",
        hex: "#f4a7b9",
        images: [
          "images/tshirts/anime/Dragon/pink/ChatGPT Image Jul 5, 2026, 02_04_02 PM.webp",
          "images/tshirts/anime/Dragon/pink/ChatGPT Image Jul 5, 2026, 02_04_41 PM.webp",
          "images/tshirts/anime/Dragon/pink/Front_1_c_45.webp",
          "images/tshirts/anime/Dragon/pink/Back_2_c_45.webp"
        ]
      },
      {
        name: "Lavender",
        hex: "#c4a9d1",
        images: [
          "images/tshirts/anime/Dragon/lavender/ChatGPT Image Jul 5, 2026, 02_04_09 PM.webp",
          "images/tshirts/anime/Dragon/lavender/ChatGPT Image Jul 5, 2026, 02_04_46 PM.webp",
          "images/tshirts/anime/Dragon/lavender/Front_1_c_49.webp",
          "images/tshirts/anime/Dragon/lavender/Back_2_c_49.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/Dragon/cream/ChatGPT Image Jul 5, 2026, 02_04_17 PM.webp",
          "images/tshirts/anime/Dragon/cream/ChatGPT Image Jul 5, 2026, 02_04_52 PM.webp",
          "images/tshirts/anime/Dragon/cream/Front_1_c_61.webp",
          "images/tshirts/anime/Dragon/cream/Back_2_c_61.webp"
        ]
      }
    ]
  },

  // ── 14 — Devil ────────────────────────────────────────────
  {
    id: 14,
    name: "Devil",
    category: "Anime",
    price: 649,
    description: "Every devil has a story. Devil is a raw, dark design that doesn't apologize for what it is — powerful, unsettling, and impossible to ignore. For those who embrace the shadow side. Soft-touch premium fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/anime/Devil/black/ChatGPT Image Jul 5, 2026, 01_35_03 AM.webp",
          "images/tshirts/anime/Devil/black/Front_1_c_2.webp",
          "images/tshirts/anime/Devil/black/Back_2_c_2.webp"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/anime/Devil/Navy blue/ChatGPT Image Jul 5, 2026, 01_35_09 AM.webp",
          "images/tshirts/anime/Devil/Navy blue/Front_1_c_3.webp",
          "images/tshirts/anime/Devil/Navy blue/Back_2_c_3.webp"
        ]
      },
      {
        name: "Bottle Green",
        hex: "#2d6a4f",
        images: [
          "images/tshirts/anime/Devil/Bottle Green/ChatGPT Image Jul 5, 2026, 01_35_16 AM.webp",
          "images/tshirts/anime/Devil/Bottle Green/Front_1_c_8.webp",
          "images/tshirts/anime/Devil/Bottle Green/Back_2_c_8.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/anime/Devil/maroon/ChatGPT Image Jul 5, 2026, 01_35_21 AM.webp",
          "images/tshirts/anime/Devil/maroon/Front_1_c_25.webp",
          "images/tshirts/anime/Devil/maroon/Back_2_c_41.webp"
        ]
      },
      {
        name: "Olive Green",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/anime/Devil/Olive green/ChatGPT Image Jul 5, 2026, 01_35_26 AM.webp",
          "images/tshirts/anime/Devil/Olive green/Front_1_c_41.webp",
          "images/tshirts/anime/Devil/Olive green/Back_2_c_41.webp"
        ]
      }
    ]
  },

  // ── 15 — Sakura Season ────────────────────────────────────
  {
    id: 15,
    name: "Sakura Season",
    category: "Anime",
    price: 749,
    description: "Fleeting. Beautiful. Gone too soon. Sakura Season captures the bittersweet magic of cherry blossoms — a reminder that beauty is most powerful when it doesn't last. Soft, dreamy, and deeply poetic. Breathable, durable cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/Sakura Season/white/ChatGPT Image Jul 5, 2026, 01_22_46 AM.webp",
          "images/tshirts/anime/Sakura Season/white/ChatGPT Image Jul 5, 2026, 01_23_10 AM.webp",
          "images/tshirts/anime/Sakura Season/white/Front_1_c_1.webp",
          "images/tshirts/anime/Sakura Season/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Lavender",
        hex: "#c4a9d1",
        images: [
          "images/tshirts/anime/Sakura Season/lavender/ChatGPT Image Jul 5, 2026, 01_22_55 AM.webp",
          "images/tshirts/anime/Sakura Season/lavender/ChatGPT Image Jul 5, 2026, 01_23_15 AM.webp",
          "images/tshirts/anime/Sakura Season/lavender/Front_1_c_49.webp",
          "images/tshirts/anime/Sakura Season/lavender/Back_2_c_49.webp"
        ]
      },
      {
        name: "Mint",
        hex: "#98d4c8",
        images: [
          "images/tshirts/anime/Sakura Season/mint/ChatGPT Image Jul 5, 2026, 01_23_00 AM.webp",
          "images/tshirts/anime/Sakura Season/mint/ChatGPT Image Jul 5, 2026, 01_23_20 AM.webp",
          "images/tshirts/anime/Sakura Season/mint/Front_1_c_53.webp",
          "images/tshirts/anime/Sakura Season/mint/Back_2_c_53.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/Sakura Season/cream/ChatGPT Image Jul 5, 2026, 01_23_05 AM.webp",
          "images/tshirts/anime/Sakura Season/cream/ChatGPT Image Jul 5, 2026, 01_23_25 AM.webp",
          "images/tshirts/anime/Sakura Season/cream/Front_1_c_61.webp",
          "images/tshirts/anime/Sakura Season/cream/Back_2_c_61.webp"
        ]
      }
    ]
  },

  // ── 16 — I don't need anyone to save me ──────────────────
  {
    id: 16,
    name: "I don't need anyone to save me",
    category: "Anime",
    price: 599,
    description: "Self-reliance. Inner strength. This tee is a declaration — raw, personal, and unapologetic. For those who've learned to be their own hero. No saviour. No rescue. Just you. Unisex fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/anime/I don't need anyone to save me/black/ChatGPT Image Jul 5, 2026, 12_58_09 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/black/ChatGPT Image Jul 5, 2026, 12_57_33 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/black/Front_1_c_2.webp",
          "images/tshirts/anime/I don't need anyone to save me/black/Back_2_c_2.webp"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/anime/I don't need anyone to save me/navy blue/ChatGPT Image Jul 5, 2026, 12_57_42 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/navy blue/ChatGPT Image Jul 5, 2026, 12_58_14 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/navy blue/Front_1_c_3.webp",
          "images/tshirts/anime/I don't need anyone to save me/navy blue/Back_2_c_3.webp"
        ]
      },
      {
        name: "Bottle Green",
        hex: "#2d6a4f",
        images: [
          "images/tshirts/anime/I don't need anyone to save me/bottle green/ChatGPT Image Jul 5, 2026, 12_57_48 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/bottle green/ChatGPT Image Jul 5, 2026, 12_58_20 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/bottle green/Front_1_c_8.webp",
          "images/tshirts/anime/I don't need anyone to save me/bottle green/Back_2_c_8.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/anime/I don't need anyone to save me/maroon/ChatGPT Image Jul 5, 2026, 12_57_53 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/maroon/ChatGPT Image Jul 5, 2026, 12_58_28 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/maroon/Front_1_c_25.webp",
          "images/tshirts/anime/I don't need anyone to save me/maroon/Back_2_c_25.webp"
        ]
      },
      {
        name: "Olive Green",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/anime/I don't need anyone to save me/olive green/ChatGPT Image Jul 5, 2026, 12_58_01 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/olive green/ChatGPT Image Jul 5, 2026, 12_58_42 AM.webp",
          "images/tshirts/anime/I don't need anyone to save me/olive green/Front_1_c_41.webp",
          "images/tshirts/anime/I don't need anyone to save me/olive green/Back_2_c_41.webp"
        ]
      }
    ]
  },

  // ── 17 — Power is earned not given ────────────────────────
  {
    id: 17,
    name: "Power is earned not given",
    category: "Anime",
    price: 599,
    description: "You don't receive it. You build it. Power is earned not given is a daily reminder that greatness is forged through struggle, discipline, and refusing to quit. Wear your grind. Premium graphic tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/Power is earned not given/white/ChatGPT Image Jul 5, 2026, 01_09_07 AM.webp",
          "images/tshirts/anime/Power is earned not given/white/ChatGPT Image Jul 5, 2026, 01_09_26 AM.webp",
          "images/tshirts/anime/Power is earned not given/white/Front_1_c_1.webp",
          "images/tshirts/anime/Power is earned not given/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/anime/Power is earned not given/grey/ChatGPT Image Jul 5, 2026, 01_09_13 AM.webp",
          "images/tshirts/anime/Power is earned not given/grey/ChatGPT Image Jul 5, 2026, 01_09_34 AM.webp",
          "images/tshirts/anime/Power is earned not given/grey/Front_1_c_4.webp",
          "images/tshirts/anime/Power is earned not given/grey/Back_2_c_4.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/Power is earned not given/cream/ChatGPT Image Jul 5, 2026, 01_09_19 AM.webp",
          "images/tshirts/anime/Power is earned not given/cream/ChatGPT Image Jul 5, 2026, 01_09_40 AM.webp",
          "images/tshirts/anime/Power is earned not given/cream/Front_1_c_61.webp",
          "images/tshirts/anime/Power is earned not given/cream/Back_2_c_61.webp"
        ]
      }
    ]
  },

  // ── 18 — King of Curses ───────────────────────────────────
  {
    id: 18,
    name: "King of Curses",
    category: "Anime",
    price: 699,
    description: "Feared by all. Bound by nothing. King of Curses is an ode to the most powerful cursed spirit — a being of pure, overwhelming energy who exists beyond the rules of the world. Minimalist. Menacing. Iconic.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/anime/King of Curses/black/ChatGPT Image Jul 1, 2026, 02_26_56 PM.webp",
          "images/tshirts/anime/King of Curses/black/ChatGPT Image Jul 1, 2026, 02_27_29 PM.webp",
          "images/tshirts/anime/King of Curses/black/Front_1_c_2.webp",
          "images/tshirts/anime/King of Curses/black/Back_2_c_2.webp"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/anime/King of Curses/navy blue/ChatGPT Image Jul 1, 2026, 02_27_01 PM.webp",
          "images/tshirts/anime/King of Curses/navy blue/ChatGPT Image Jul 1, 2026, 02_27_37 PM.webp",
          "images/tshirts/anime/King of Curses/navy blue/Front_1_c_3.webp",
          "images/tshirts/anime/King of Curses/navy blue/Back_2_c_3.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/anime/King of Curses/grey/ChatGPT Image Jul 1, 2026, 02_27_06 PM.webp",
          "images/tshirts/anime/King of Curses/grey/ChatGPT Image Jul 1, 2026, 02_27_42 PM.webp",
          "images/tshirts/anime/King of Curses/grey/Front_1_c_4.webp",
          "images/tshirts/anime/King of Curses/grey/Back_2_c_4.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/anime/King of Curses/maroon/ChatGPT Image Jul 1, 2026, 02_27_11 PM.webp",
          "images/tshirts/anime/King of Curses/maroon/ChatGPT Image Jul 1, 2026, 02_27_54 PM.webp",
          "images/tshirts/anime/King of Curses/maroon/Front_1_c_25.webp",
          "images/tshirts/anime/King of Curses/maroon/Back_2_c_25.webp"
        ]
      },
      {
        name: "Lavender",
        hex: "#c4a9d1",
        images: [
          "images/tshirts/anime/King of Curses/lavender/ChatGPT Image Jul 1, 2026, 02_27_16 PM.webp",
          "images/tshirts/anime/King of Curses/lavender/ChatGPT Image Jul 1, 2026, 02_28_01 PM.webp",
          "images/tshirts/anime/King of Curses/lavender/Front_1_c_49.webp",
          "images/tshirts/anime/King of Curses/lavender/Back_2_c_49.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/King of Curses/white/ChatGPT Image Jul 1, 2026, 02_27_21 PM.webp",
          "images/tshirts/anime/King of Curses/white/ChatGPT Image Jul 1, 2026, 02_28_12 PM.webp",
          "images/tshirts/anime/King of Curses/white/Front_1_c_1.webp",
          "images/tshirts/anime/King of Curses/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Royal Blue",
        hex: "#1a3adb",
        images: [
          "images/tshirts/anime/King of Curses/royal blue/ChatGPT Image Jul 1, 2026, 02_26_44 PM.webp",
          "images/tshirts/anime/King of Curses/royal blue/ChatGPT Image Jul 1, 2026, 02_27_48 PM.webp",
          "images/tshirts/anime/King of Curses/royal blue/Front_1_c_9.webp",
          "images/tshirts/anime/King of Curses/royal blue/Back_2_c_9.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/King of Curses/cream/ChatGPT Image Jul 1, 2026, 02_26_51 PM.webp",
          "images/tshirts/anime/King of Curses/cream/ChatGPT Image Jul 1, 2026, 02_28_06 PM.webp",
          "images/tshirts/anime/King of Curses/cream/Front_1_c_61.webp",
          "images/tshirts/anime/King of Curses/cream/Back_2_c_61.webp"
        ]
      }
    ]
  },

  // ── 19 — Satoru Gojo ──────────────────────────────────────
  {
    id: 19,
    name: "Satoru Gojo",
    category: "Anime",
    price: 599,
    description: "The strongest. Full stop. Satoru Gojo is a tribute to the most invincible sorcerer in history — the infinite, the untouchable, the one who made the impossible look effortless. A design as limitless as he is.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/Satoru Gojo/white/ChatGPT Image Jul 1, 2026, 01_21_18 PM.webp",
          "images/tshirts/anime/Satoru Gojo/white/ChatGPT Image Jul 1, 2026, 01_26_27 PM.webp",
          "images/tshirts/anime/Satoru Gojo/white/Front_1_c_1.webp",
          "images/tshirts/anime/Satoru Gojo/white/Back_2_c_1.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/Satoru Gojo/cream/ChatGPT Image Jul 1, 2026, 01_26_23 PM.webp",
          "images/tshirts/anime/Satoru Gojo/cream/ChatGPT Image Jul 1, 2026, 01_26_34 PM.webp",
          "images/tshirts/anime/Satoru Gojo/cream/Front_1_c_61.webp",
          "images/tshirts/anime/Satoru Gojo/cream/Back_2_c_61.webp"
        ]
      }
    ]
  },

  // ── 20 — Ryomen Sukuna ────────────────────────────────────
  {
    id: 20,
    name: "Ryomen Sukuna",
    category: "Anime",
    price: 649,
    description: "The King of Curses incarnate. Ryomen Sukuna is the embodiment of absolute evil and absolute power — tattooed, ancient, and terrifying. A design that commands respect. Loud. Dominant. Unmistakable. Premium oversized fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/black/ChatGPT Image Jul 1, 2026, 01_50_34 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/black/Front_1_c_2.webp",
          "images/tshirts/anime/Ryomen Sukuna/black/Back_2_c_2.webp"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/navy blue/ChatGPT Image Jul 1, 2026, 01_50_40 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/navy blue/Front_1_c_3.webp",
          "images/tshirts/anime/Ryomen Sukuna/navy blue/Back_2_c_3.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/grey/ChatGPT Image Jul 1, 2026, 01_50_46 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/grey/Back_2_c_4.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/maroon/ChatGPT Image Jul 1, 2026, 01_50_53 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/maroon/Front_1_c_25.webp",
          "images/tshirts/anime/Ryomen Sukuna/maroon/Back_2_c_25.webp"
        ]
      },
      {
        name: "Olive Green",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/olive green/ChatGPT Image Jul 1, 2026, 01_50_59 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/olive green/Front_1_c_41.webp",
          "images/tshirts/anime/Ryomen Sukuna/olive green/Back_2_c_41.webp"
        ]
      },
      {
        name: "Lavender",
        hex: "#c4a9d1",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/lavender/ChatGPT Image Jul 1, 2026, 01_51_05 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/lavender/Front_1_c_49.webp",
          "images/tshirts/anime/Ryomen Sukuna/lavender/Back_2_c_49.webp"
        ]
      },
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/cream/ChatGPT Image Jul 1, 2026, 01_51_11 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/cream/Front_1_c_61.webp",
          "images/tshirts/anime/Ryomen Sukuna/cream/Back_2_c_61.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/anime/Ryomen Sukuna/white/ChatGPT Image Jul 1, 2026, 01_50_26 PM.webp",
          "images/tshirts/anime/Ryomen Sukuna/white/Front_1_c_1.webp",
          "images/tshirts/anime/Ryomen Sukuna/white/Back_2_c_1.webp"
        ]
      }
    ]
  },

  // ── 21 — Unbothered ───────────────────────────────────────
  {
    id: 21,
    name: "Unbothered",
    category: "Minimalist",
    price: 549,
    description: "Cool. Calm. Completely unbothered. This tee says it all without saying a word. Clean minimal type on premium cotton — for those who've mastered the art of not caring.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/unbothered/black/ChatGPT Image Jul 23, 2026, 12_47_21 AM.webp"
        ]
      },
      {
        name: "Bottle Green",
        hex: "#1a4731",
        images: [
          "images/tshirts/minimalist/unbothered/bottle green/ChatGPT Image Jul 23, 2026, 12_47_06 AM.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/minimalist/unbothered/maroon/ChatGPT Image Jul 23, 2026, 12_47_15 AM.webp"
        ]
      }
    ]
  },

  // ── 22 — Tired ────────────────────────────────────────────
  {
    id: 22,
    name: "Tired",
    category: "Minimalist",
    price: 549,
    description: "Honest. Raw. Relatable. Tired captures that feeling we all know too well — in the most stylish way possible. Minimal design, maximum mood. 100% cotton premium tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/tired/black/ChatGPT Image Jul 23, 2026, 01_01_19 AM.webp"
        ]
      },
      {
        name: "Bottle Green",
        hex: "#1a4731",
        images: [
          "images/tshirts/minimalist/tired/bottle green/ChatGPT Image Jul 23, 2026, 01_01_27 AM.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/minimalist/tired/maroon/ChatGPT Image Jul 23, 2026, 01_01_38 AM.webp"
        ]
      },
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/minimalist/tired/purple/ChatGPT Image Jul 23, 2026, 01_01_32 AM.webp"
        ]
      }
    ]
  },

  // ── 23 — Peace or Chaos ───────────────────────────────────
  {
    id: 23,
    name: "Peace or Chaos",
    category: "Minimalist",
    price: 549,
    description: "Two sides. One tee. Peace or Chaos is a clean, minimalist design for people who exist between two extremes — and wouldn't have it any other way. Premium cotton, everyday comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/peace or chaos/black/ChatGPT Image Jul 23, 2026, 01_06_58 AM.webp"
        ]
      },
      {
        name: "Bottle Green",
        hex: "#1a4731",
        images: [
          "images/tshirts/minimalist/peace or chaos/bottle green/ChatGPT Image Jul 23, 2026, 01_07_09 AM.webp"
        ]
      },
      {
        name: "Olive Green",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/minimalist/peace or chaos/olive green/ChatGPT Image Jul 23, 2026, 01_07_14 AM.webp"
        ]
      }
    ]
  },

  // ── 24 — Unholy ───────────────────────────────────────────
  {
    id: 24,
    name: "Unholy",
    category: "Minimalist",
    price: 549,
    description: "A little dark. A little divine. Unholy is for those who walk the line between chaos and grace — minimal type, maximum statement. Premium cotton tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/minimalist/unholy/grey/ChatGPT Image Jul 23, 2026, 12_51_12 AM - Copy.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/minimalist/unholy/white/ChatGPT Image Jul 23, 2026, 12_51_31 AM (1).webp"
        ]
      }
    ]
  },

  // ── 25 — Who Cares ────────────────────────────────────────
  {
    id: 25,
    name: "Who Cares",
    category: "Minimalist",
    price: 549,
    description: "The answer to every unnecessary question. Who Cares is a minimalist tee designed for people who've stopped explaining themselves. Comfortable. Confident. Carefree.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/who cares/black/ChatGPT Image Jul 24, 2026, 01_11_21 PM.webp"
        ]
      },
      {
        name: "Bottle Green",
        hex: "#1a4731",
        images: [
          "images/tshirts/minimalist/who cares/bottle green/ChatGPT Image Jul 24, 2026, 01_11_28 PM.webp"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/minimalist/who cares/navy blue/ChatGPT Image Jul 24, 2026, 01_11_35 PM.webp"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/minimalist/who cares/petrol blue/ChatGPT Image Jul 24, 2026, 01_11_41 PM.webp"
        ]
      }
    ]
  },

  // ── 26 — Paradox ──────────────────────────────────────────
  {
    id: 26,
    name: "Paradox",
    category: "Minimalist",
    price: 549,
    description: "Make sense? Never. Paradox is a minimal tee for the walking contradiction — the overthinker who underdoes, the introvert who overshares. Clean type, deep meaning.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/paradox/black/ChatGPT Image Jul 24, 2026, 01_18_30 PM.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/minimalist/paradox/maroon/ChatGPT Image Jul 24, 2026, 01_18_37 PM.webp"
        ]
      },
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/minimalist/paradox/purple/ChatGPT Image Jul 24, 2026, 01_18_42 PM.webp"
        ]
      }
    ]
  },

  // ── 27 — Delulu ───────────────────────────────────────────
  {
    id: 27,
    name: "Delulu",
    category: "Minimalist",
    price: 549,
    description: "The delusion is the solution. Delulu is a playful minimalist tee for the dreamers, the optimists, and everyone who manifests first and asks questions never. 100% cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/delulu/black/ChatGPT Image Jul 24, 2026, 01_03_48 PM.webp"
        ]
      },
      {
        name: "Chocolate Brown",
        hex: "#5c3d2e",
        images: [
          "images/tshirts/minimalist/delulu/chocolate brown/ChatGPT Image Jul 24, 2026, 01_04_13 PM.webp"
        ]
      },
      {
        name: "Olive Green",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/minimalist/delulu/olive green/ChatGPT Image Jul 24, 2026, 01_04_06 PM.webp"
        ]
      },
      {
        name: "Petrol Blue",
        hex: "#1b4d6e",
        images: [
          "images/tshirts/minimalist/delulu/petrol blue/ChatGPT Image Jul 24, 2026, 01_04_00 PM.webp"
        ]
      }
    ]
  },

  // ── 28 — Peace Never an Option ────────────────────────────
  {
    id: 28,
    name: "Peace Never an Option",
    category: "Minimalist",
    price: 549,
    description: "For the restless. For the relentless. Peace Never an Option is a bold minimalist statement for those who thrive in the grind and wouldn't want it any other way.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/peace never an option/black/ChatGPT Image Jul 24, 2026, 01_36_17 PM.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/minimalist/peace never an option/grey/ChatGPT Image Jul 24, 2026, 01_36_33 PM.webp"
        ]
      },
      {
        name: "Maroon",
        hex: "#7f1d1d",
        images: [
          "images/tshirts/minimalist/peace never an option/maroon/ChatGPT Image Jul 24, 2026, 01_36_23 PM.webp"
        ]
      },
      {
        name: "Navy",
        hex: "#1e3a5f",
        images: [
          "images/tshirts/minimalist/peace never an option/navy/ChatGPT Image Jul 24, 2026, 01_36_29 PM.webp"
        ]
      },
      {
        name: "Olive Green",
        hex: "#6b7c3a",
        images: [
          "images/tshirts/minimalist/peace never an option/olive green/ChatGPT Image Jul 24, 2026, 01_36_40 PM.webp"
        ]
      }
    ]
  },

  // ── 29 — Anti Social ──────────────────────────────────────
  {
    id: 29,
    name: "Anti Social",
    category: "Minimalist",
    price: 549,
    description: "Socially exhausted. Intentionally minimal. Anti Social is for everyone who needs a tee that explains their whole personality before anyone even says hello. Premium cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Cream",
        hex: "#f5efe0",
        images: [
          "images/tshirts/minimalist/anti social/cream/ChatGPT Image Jul 24, 2026, 01_27_17 PM.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/minimalist/anti social/grey/ChatGPT Image Jul 24, 2026, 01_27_11 PM.webp"
        ]
      },
      {
        name: "Pastel Green",
        hex: "#a8d5a2",
        images: [
          "images/tshirts/minimalist/anti social/pastel green/ChatGPT Image Jul 24, 2026, 01_27_29 PM.webp"
        ]
      },
      {
        name: "White",
        hex: "#f5f5f5",
        images: [
          "images/tshirts/minimalist/anti social/white/ChatGPT Image Jul 24, 2026, 01_27_05 PM.webp"
        ]
      }
    ]
  },

  // ── 30 — Drained ──────────────────────────────────────────
  {
    id: 30,
    name: "Drained",
    category: "Minimalist",
    price: 549,
    description: "Running on 2% battery and zero patience. Drained is the most honest tee in your wardrobe — clean minimal type for those who feel it every single day. Premium cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          "images/tshirts/minimalist/drained/black/ChatGPT Image Jul 24, 2026, 01_42_19 PM.webp"
        ]
      },
      {
        name: "Grey",
        hex: "#9ca3af",
        images: [
          "images/tshirts/minimalist/drained/grey/ChatGPT Image Jul 24, 2026, 01_42_56 PM.webp"
        ]
      },
      {
        name: "Navy Blue",
        hex: "#1a2a4a",
        images: [
          "images/tshirts/minimalist/drained/navy blue/ChatGPT Image Jul 24, 2026, 01_42_31 PM.webp"
        ]
      },
      {
        name: "Purple",
        hex: "#6b21a8",
        images: [
          "images/tshirts/minimalist/drained/purple/ChatGPT Image Jul 24, 2026, 01_42_48 PM.webp"
        ]
      }
    ]
  }

    // ─────────────────────────────────────────────────────────
  // HOME & LIFESTYLE COLLECTION  (ids 31 – 36)
  // ─────────────────────────────────────────────────────────
  //
  // FOLDER STRUCTURE FOR NEW PRODUCTS:
  //   images/lifestyle/stoles/set-of-2/<variant name>/<image file>
  //   images/lifestyle/stoles/set-of-3/<variant name>/<image file>
  //   images/lifestyle/scrunchies/<variant name>/<image file>
  //   images/lifestyle/mugs/single/<variant name>/<image file>
  //   images/lifestyle/mugs/set-of-2/<variant name>/<image file>
  //   images/lifestyle/coasters/<variant name>/<image file>
  //
  // HOW TO ADD IMAGES:
  //   1. Create the folder (e.g. images/lifestyle/stoles/set-of-2/set-1/)
  //   2. Drop your photos in there (must be .webp format)
  //   3. Add the path to the images[] array below
  //   4. Save & refresh. Done!
  //
  // ─────────────────────────────────────────────────────────

  ,

  // ── 31 — Stoles (Set of 2) ────────────────────────────────
  {
    id: 31,
    name: "Stoles (Set of 2)",
    category: "Home & Lifestyle",
    price: 500,
    description: "Elegant and lightweight. Our handcrafted stoles in curated sets of 2 are designed to add a beautiful layer of color and style to any attire. Soft texture, premium drape. Available in 3 unique sets.",
    colors: [
      {
        name: "Set 1",
        hex: "#c8a97e",
        images: [
          "images/lifestyle/stoles/set-of-2/set-1/image.png",
          "images/lifestyle/stoles/set-of-2/set-1/ChatGPT Image Aug 1, 2026, 01_03_27 PM.png",
          "images/lifestyle/stoles/set-of-2/set-1/ChatGPT Image Aug 1, 2026, 01_06_32 PM.png"
        ]
      },
      {
        name: "Set 2",
        hex: "#8b6c5c",
        images: [
          "images/lifestyle/stoles/set-of-2/set-2/image.png",
          "images/lifestyle/stoles/set-of-2/set-2/ChatGPT Image Aug 1, 2026, 01_16_16 PM.png",
          "images/lifestyle/stoles/set-of-2/set-2/ChatGPT Image Aug 1, 2026, 01_18_56 PM.png"
        ]
      },
      {
        name: "Set 3",
        hex: "#5a7a6e",
        images: [
          "images/lifestyle/stoles/set-of-2/set-3/image.png"
        ]
      }
    ]
  },

  // ── 32 — Stoles (Set of 3) ────────────────────────────────
  {
    id: 32,
    name: "Stoles (Set of 3)",
    category: "Home & Lifestyle",
    price: 700,
    description: "Versatility at its best. Our handcrafted stoles in curated sets of 3 provide endless options to style, match, and color coordinate. Exquisitely soft fabric, perfect for gifting. Available in 3 unique sets.",
    colors: [
      {
        name: "Set 1",
        hex: "#c8a97e",
        images: [
          "images/lifestyle/stoles/set-of-3/set-1/ChatGPT Image Aug 1, 2026, 01_03_27 PM.png",
          "images/lifestyle/stoles/set-of-3/set-1/ChatGPT Image Aug 1, 2026, 01_18_56 PM.png",
          "images/lifestyle/stoles/set-of-3/set-1/ChatGPT Image Aug 1, 2026, 01_28_30 PM.png",
          "images/lifestyle/stoles/set-of-3/set-1/ChatGPT Image Aug 1, 2026, 01_33_10 PM.png"
        ]
      },
      {
        name: "Set 2",
        hex: "#8b6c5c",
        images: [
          "images/lifestyle/stoles/set-of-3/set-2/ChatGPT Image Aug 1, 2026, 01_06_32 PM.png",
          "images/lifestyle/stoles/set-of-3/set-2/ChatGPT Image Aug 1, 2026, 01_16_16 PM.png",
          "images/lifestyle/stoles/set-of-3/set-2/ChatGPT Image Aug 1, 2026, 01_28_30 PM.png",
          "images/lifestyle/stoles/set-of-3/set-2/image.png"
        ]
      },
      {
        name: "Set 3",
        hex: "#5a7a6e",
        images: [
          "images/lifestyle/stoles/set-of-3/set-3/image.png"
        ]
      }
    ]
  },

  // ── 33 — Scrunchies (Set of 3) ────────────────────────────
  {
    id: 33,
    name: "Scrunchies (Set of 3)",
    category: "Home & Lifestyle",
    price: 300,
    description: "Add a soft touch to your style. Handcrafted sets of 3 scrunchies made with premium, hair-friendly fabrics. Curated color palettes that look incredibly stylish in your hair or on your wrist. Available in 3 unique sets.",
    colors: [
      {
        name: "Set 1",
        hex: "#e8a0bf",
        images: [
          "images/lifestyle/scrunchies/set-1/image.webp",
          "images/lifestyle/scrunchies/set-1/Left_Pocket_3_c_17 (3).webp",
          "images/lifestyle/scrunchies/set-1/Left_Pocket_3_c_17 (4).webp",
          "images/lifestyle/scrunchies/set-1/Left_Pocket_3_c_17 (5).webp"
        ]
      },
      {
        name: "Set 2",
        hex: "#a78bca",
        images: [
          "images/lifestyle/scrunchies/set-2/image.webp",
          "images/lifestyle/scrunchies/set-2/Left_Pocket_3_c_17.webp",
          "images/lifestyle/scrunchies/set-2/Left_Pocket_3_c_17 (3).webp",
          "images/lifestyle/scrunchies/set-2/Left_Pocket_3_c_17 (5).webp"
        ]
      },
      {
        name: "Set 3",
        hex: "#7bc8a4",
        images: [
          "images/lifestyle/scrunchies/set-3/image.webp",
          "images/lifestyle/scrunchies/set-3/Left_Pocket_3_c_17.webp",
          "images/lifestyle/scrunchies/set-3/Left_Pocket_3_c_17 (2).webp",
          "images/lifestyle/scrunchies/set-3/Left_Pocket_3_c_17 (4).webp"
        ]
      }
    ]
  },

  // ── 34 — Mugs (Single) ────────────────────────────────────
  {
    id: 34,
    name: "Mugs (Single)",
    category: "Home & Lifestyle",
    price: 180,
    description: "Start your morning with original art. Features beautiful, durable prints on premium 330ml ceramic. Microwave and dishwasher safe, perfect for your favorite brew or as a thoughtful gift. 6 unique designs to choose from.",
    colors: [
      {
        name: "Design 1",
        hex: "#c97b5a",
        images: [
          "images/lifestyle/mugs/single/design-1/Front_1_c_26 (2).jpg"
        ]
      },
      {
        name: "Design 2",
        hex: "#5a8a7a",
        images: [
          "images/lifestyle/mugs/single/design-2/Front_1_c_26 (3).jpg"
        ]
      },
      {
        name: "Design 3",
        hex: "#7a6a9a",
        images: [
          "images/lifestyle/mugs/single/design-3/Front_1_c_26 (5).jpg"
        ]
      },
      {
        name: "Design 4",
        hex: "#9a7a4a",
        images: [
          "images/lifestyle/mugs/single/design-4/Front_1_c_26 (6).jpg"
        ]
      },
      {
        name: "Design 5",
        hex: "#6a8a5a",
        images: [
          "images/lifestyle/mugs/single/design-5/Front_1_c_26 (7).jpg"
        ]
      },
      {
        name: "Design 6",
        hex: "#8a5a6a",
        images: [
          "images/lifestyle/mugs/single/design-6/Front_1_c_26.jpg"
        ]
      }
    ]
  },

  // ── 35 — Mugs (Set of 2) ──────────────────────────────────
  {
    id: 35,
    name: "Mugs (Set of 2)",
    category: "Home & Lifestyle",
    price: 350,
    description: "Double the joy. Share your brew in style with our matching pair sets. Premium 330ml ceramic mugs with coordinating original illustrations. Highly durable, microwave and dishwasher safe. 2 unique pairs available.",
    colors: [
      {
        name: "Set 1",
        hex: "#d4a96a",
        images: [
          "images/lifestyle/mugs/set-of-2/set-1/Front_1_c_26 (7).jpg",
          "images/lifestyle/mugs/set-of-2/set-1/Front_1_c_26.jpg",
          "images/lifestyle/mugs/set-of-2/set-1/image.png"
        ]
      },
      {
        name: "Set 2",
        hex: "#5c3d2e",
        images: [
          "images/lifestyle/mugs/set-of-2/set-2/Front_1_c_26 (3).jpg",
          "images/lifestyle/mugs/set-of-2/set-2/Front_1_c_26 (5).jpg",
          "images/lifestyle/mugs/set-of-2/set-2/image.png"
        ]
      }
    ]
  },

  // ── 36 — Coasters (Set of 6) ──────────────────────────────
  {
    id: 36,
    name: "Coasters (Set of 6)",
    category: "Home & Lifestyle",
    price: 600,
    description: "Protect your spaces, express your style. Set of 6 cork-backed coasters featuring distinctive, colorful art prints. Heat resistant, waterproof, and highly durable. Comes in 3 unique style sets.",
    colors: [
      {
        name: "Set 1",
        hex: "#c8a46a",
        images: [
          "images/lifestyle/coasters/set-1/Front_1_c_22 (2).webp"
        ]
      },
      {
        name: "Set 2",
        hex: "#6a8ac8",
        images: [
          "images/lifestyle/coasters/set-2/Front_1_c_22 (3).webp"
        ]
      },
      {
        name: "Set 3",
        hex: "#8ac86a",
        images: [
          "images/lifestyle/coasters/set-3/Front_1_c_22.webp"
        ]
      }
    ]
  }

  // ← ADD YOUR NEXT PRODUCT HERE (ids 37, 38, …)
  // Copy a block above, paste it here, change the id, name,
  // folder paths, and variants. Remember the comma after the
  // previous closing }.
];
