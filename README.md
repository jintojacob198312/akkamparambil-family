# Akkamparambil Family Portal

A beautiful family website for the Akkamparambil family — hosted free on GitHub Pages.

## Files in this repo

| File | What it does |
|------|-------------|
| `index.html` | Home page with hero, stats, and quick links |
| `members.html` | Full member directory with search & filter |
| `tree.html` | Interactive family tree |
| `map.html` | World map showing where everyone lives |
| `gallery.html` | Photo gallery organized by album |
| `style.css` | All the styling — fonts, colors, layout |
| `family.json` | **THE KEY FILE** — all your family data lives here |

---

## How to add a new family member

Open `family.json` and add a new entry to the `"members"` array.
Copy-paste this template and fill in the details:

```json
{
  "id": 13,
  "name": "Full Name Here",
  "nickname": "Short name",
  "parentId": 3,
  "spouseId": null,
  "generation": 3,
  "born": 1990,
  "died": null,
  "location": "City, State",
  "country": "India",
  "profession": "Software Engineer",
  "field": "Technology",
  "bio": "A short description about this person.",
  "photo": "photos/their-photo.jpg",
  "contact": {
    "email": "email@example.com",
    "phone": "+91-9876543210",
    "whatsapp": "+91-9876543210"
  }
}
```

### Field guide:
- **id** — a unique number (just use the next number in sequence)
- **parentId** — the `id` of their father/mother (null if they married into the family)
- **spouseId** — the `id` of their spouse (null if not married or spouse not in the family)
- **generation** — 1 = grandparents, 2 = parents, 3 = children
- **field** — choose from: Technology, Medicine, Healthcare, Finance, Education, Engineering, Business, Law, Arts, Agriculture, Family
- **photo** — leave as `""` for initials, or put `"photos/name.jpg"` after uploading the photo

---

## How to add photos

1. Create a folder called `photos` in your repo
2. Upload photos to that folder (GitHub → Add file → Upload files)
3. Open `gallery.html`, scroll to the `<script>` tag at the bottom
4. Add entries to the `albums` array like this:

```javascript
{
  title: 'Family Reunion 2023',
  photos: [
    { src: 'photos/reunion2023-1.jpg', caption: 'Everyone together' },
    { src: 'photos/reunion2023-2.jpg', caption: 'The grandchildren' },
  ]
}
```

---

## How to add member profile photos

1. Upload photos to a `photos/` folder in the repo
2. In `family.json`, set the member's `"photo"` to `"photos/filename.jpg"`
3. The photo will appear on their member card and in the tree

---

## How to update the world map

The map auto-generates from locations in `family.json`.
If a city isn't appearing correctly, open `map.html` and add it to the `cityCoords` object:

```javascript
'Chennai, Tamil Nadu': [13.0827, 80.2707],
```

---

## Fields available for profession filter

To add a new profession filter button, open `members.html` and add:
```html
<button class="filter-btn" data-field="Law">Law</button>
```

Then make sure the `field` value in `family.json` matches exactly.

---

## Custom domain

Your site should be live at **akkamparambil.com** once DNS propagates.
You can check DNS propagation status at: https://www.whatsmydns.net

---

## Need help?

Built for the Akkamparambil family with love. For any changes or additions,
edit `family.json` — it's the only file you'll need to touch for most updates.
