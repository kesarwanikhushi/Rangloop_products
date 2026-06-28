# RangLoop Catalog — Setup & Usage Guide

A plain HTML/CSS/JavaScript product catalog website for the RangLoop brand.
No frameworks, no build tools, no server required.

---

## 1. How to open the website

1. Open the `rangloop-catalog/` folder on your computer.
2. Double-click `index.html`.
3. It opens in your default browser — that's it. ✅

> **Note:** Product images won't load until you add real image files  
> to the `images/` folder (see Section 2 below). The site itself  
> works perfectly without them — you'll just see an empty grey box  
> where the image would appear.

---

## 2. How to add a new product (step-by-step, no coding needed)

### Step 1 — Add your product images

- Copy your image files (`.jpg`, `.png`, `.webp`) into the `images/` folder.
- Name them clearly, e.g. `product3-front.jpg`, `product3-back.jpg`.
- Keep filenames all lowercase with no spaces (use hyphens instead).

### Step 2 — Open the product data file

- Open the file `js/products.js` in **Notepad** (right-click → Open with → Notepad)  
  or any text editor you prefer (VS Code, Notepad++, etc.).

### Step 3 — Copy and paste a new product block

Find the line at the bottom of the file that says:

```
// ← ADD YOUR NEXT PRODUCT HERE
```

**Above that comment**, paste this template:

```js
  {
    id: 6,
    name: "Your Product Name",
    category: "T-Shirts",
    price: 599,
    description: "Describe your product here. Material, fit, what makes it special.",
    images: [
      "images/product6-front.jpg",
      "images/product6-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
```

**Fill in your details:**

| Field | What to put | Example |
|---|---|---|
| `id` | Next number in sequence | `6` |
| `name` | Product name | `"Summer Drop Tee"` |
| `category` | Must be one of the options below | `"T-Shirts"` |
| `price` | Number only, no ₹ symbol | `599` |
| `description` | Description text in quotes | `"Heavy cotton tee..."` |
| `images` | List of image filenames in `images/` folder | `"images/product6-front.jpg"` |
| `sizes` | List of sizes, or `[]` if no sizes (mugs, coasters) | `["S", "M", "L"]` |

**Valid category names** (spelling and capitalisation must match exactly):
- `"T-Shirts"`
- `"Hoodies"`
- `"Mugs"`
- `"Coasters"`
- `"Caps"`

### Step 4 — Save and refresh

- Save the file (`Ctrl + S`).
- Go back to your browser and press `F5` (Refresh).
- Your new product will appear automatically in the catalog. ✅

---

## 3. How to update the Instagram username

The handle appears in three places. The easiest way:

1. Open **`index.html`** and **`product.html`** in Notepad.
2. Press `Ctrl + H` (Find & Replace).
3. Find: `rangloop.shop`
4. Replace with: `your_actual_handle`
5. Click "Replace All".
6. Save both files.

Also open `js/main.js` and change this line near the top:

```js
const INSTAGRAM_HANDLE = 'rangloop.shop';
```

Replace `rangloop.shop` with your real handle (no `@` symbol).

---

## 4. How to host this website for free

### Option A — GitHub Pages (recommended)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click **"New repository"** → name it `rangloop-catalog` → set to **Public** → Create.
3. Click **"uploading an existing file"** link on the new repo page.
4. Drag and drop your entire `rangloop-catalog/` folder contents (all files and folders).
5. Click **"Commit changes"**.
6. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**.
7. Click **Save**. In ~1 minute your site is live at:  
   `https://YOUR-GITHUB-USERNAME.github.io/rangloop-catalog/`

> **To update products later:** upload the new `products.js` (and any new images) to GitHub  
> the same way, then commit. The live site updates within 1–2 minutes.

### Option B — Netlify drag-and-drop (even simpler)

1. Go to [netlify.com](https://netlify.com) and sign up for free.
2. On the dashboard, find the **"Deploy manually"** section.
3. Drag your entire `rangloop-catalog/` folder directly onto the page.
4. Netlify instantly gives you a live URL like `https://random-name.netlify.app`.
5. You can set a custom domain in the Netlify dashboard for free.

> **To update products later:** drag the updated folder onto the Netlify dashboard again.  
> It redeploys instantly.

---

## 5. File structure reference

```
rangloop-catalog/
├── index.html          ← Main catalog page (browse all products)
├── product.html        ← Product detail page (gallery + order button)
├── css/
│   └── style.css       ← All styles (colors, layout, responsive)
├── js/
│   ├── products.js     ← YOUR PRODUCT DATA — edit this to add products
│   └── main.js         ← Site logic (do not edit unless you know JS)
├── images/
│   └── (add product images here)
└── README.md           ← This guide
```

---

## 6. Frequently asked questions

**Q: Do I need to install anything?**  
A: No. Just open `index.html` in a browser.

**Q: Why don't my images show?**  
A: Make sure the filenames in `products.js` exactly match the files in the `images/` folder — including capitalisation. `Product1.jpg` and `product1.jpg` are different.

**Q: Can I add more categories?**  
A: Yes. Add a new `<button>` in `index.html` inside the `.filter-list` with your new category name as `data-category`, then use that exact same name in `products.js`.

**Q: How do customers order?**  
A: They click "Order via Instagram DM" on the product page. Instagram opens in a new tab. A modal shows a pre-written message they can copy and paste into the chat.

**Q: Can I change the accent colour?**  
A: Open `css/style.css`, find `--orange: #FF5C00;` near the top and change the hex code.
