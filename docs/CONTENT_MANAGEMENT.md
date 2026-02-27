# Content Management Guide

This guide explains how to update the text, images, and data on the website.

## 📝 Updating Text & Translations

### Static UI Text (Buttons, Headers, Nav)
All static text is stored in **`lib/translations.ts`**.
This file exports an object with keys for `en` (English) and `ne` (Nepali).

**Example:**
To change the "Contact Us" button text:
1. Open `lib/translations.ts`.
2. Find the `footer` section.
3. Update specific string:
   ```typescript
   contact: "Get in Touch Today", // English
   // ...
   contact: "आजै सम्पर्क गर्नुहोस्", // Nepali
   ```

### Dynamic Data (Blogs, Testimonials, Locations)
Structured data is stored in **`lib/data.ts`**.

## 🛠️ Site Administration (Banners & Popups)

You can enable or disable global site notifications without changing complex code. Configuration is located at the top of the respective component files.

### 1. Maintenance / Info Banner
Located in: **`components/maintenance-banner.tsx`**

Used for system alerts, scheduled maintenance, or important updates. It appears as a colored bar at the very top of the site.

**Configuration:**
```typescript
export const MAINTENANCE_CONFIG = {
  enabled: true,         // Set to false to hide completely
  message: "We are currently performing scheduled maintenance.",
  type: "info",          // Options: 'alert' (red), 'info' (orange), 'warning' (yellow)
}
```

### 2. Announcement Popup
Located in: **`components/site-popup.tsx`**

Used for major announcements, privacy policy updates, or welcome messages. It appears as a modal overlay.

**Configuration:**
```typescript
export const POPUP_CONFIG = {
  enabled: true,
  title: "Website Under Development",
  message: "Our website is under active development...",
  buttonText: "Learn More",
  buttonLink: "/services",
  delay: 2000           // Time in milliseconds before showing
}
```

#### Adding a New Blog Post
1. Open `lib/data.ts`.
2. Locate the `blogPosts` array.
3. Add a new object to the array:
   ```typescript
   {
     id: "new-post-id",
     title: "New Post Title",
     titleNe: "नयाँ पोस्ट शीर्षक",
     excerpt: "Short summary...",
     excerptNe: "छोटो सारांश...",
     content: "Full content...",
     contentNe: "पूर्ण सामग्री...",
     image: "/new-blog-image.jpg", // See 'Management Images' below
     date: "2026-03-15",
     author: "John Doe",
     category: "News",
     likes: 0,
     comments: 0,
   }
   ```

## 🖼️ Managing Images

### Where to put images?
All images must be placed in the **`public/`** directory.
You can create subfolders like `public/blog/` or `public/products/` to stay organized.

### How to Reference Images?
Because the site uses a base path (`/belaweb2test`), you usually need to reference images carefully.

**In `lib/data.ts`**:
Just put the path relative to public. The components handle the prefixing automatically.
- ✅ Correct: `image: "/my-image.jpg"`
- ❌ Incorrect: `image: "/belaweb2test/my-image.jpg"`

**In Code (`.tsx` files)**:
If you are hardcoding an `Image` component, use the `basePath` utility:
```tsx
import { basePath } from "@/lib/utils"

<Image src={`${basePath}/my-image.jpg`} ... />
```

## 🌍 Adding New Languages
Currently, the site supports English and Nepali only.
To add a third language (e.g., Hindi):
1. Update `contexts/language-context.tsx` to include the new type.
2. Update `lib/translations.ts` to add a new translation object.
3. Update `lib/data.ts` interfaces to allow `titleHi`, `contentHi`, etc.
4. Update UI components to render the new field based on the selected language.
