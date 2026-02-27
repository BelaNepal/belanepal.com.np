# Architecture & Configuration

## 🏗️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Directory)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📂 Folder Structure

```
├── app/                  # Next.js App Router pages and layout
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout (Metadata, Providers, Security)
│   └── page.tsx          # Main landing page
├── components/           # React Components
│   ├── ui/               # Reusable UI primitives (Buttons, Cards, etc.)
│   ├── maintenance-banner.tsx # Global top-bar notification
│   ├── site-popup.tsx    # Global modal announcement
│   ├── hero-slider.tsx   # Hero section component
│   └── ...               # Other sections
├── contexts/             # Global React Contexts
│   ├── language.tsx      # i18n state (English/Nepali)
│   └── theme.tsx         # Dark/Light mode state
├── lib/                  # Utilities and Static Data
│   ├── data.ts           # Blog posts, Testimonials, Locations data
│   ├── translations.ts   # UI text translations
│   └── utils.ts          # Helper functions (cn, basePath)
├── next.config.mjs       # Next.js configuration
└── public/               # Static assets (images, fonts)
```

## ⚙️ Core Configurations

### 1. Base Path (`/belaweb2test`)
The application is configured to serve from a specific subpath: `/belaweb2test`. This simulates distinct production environments or subdirectory hosting.

- **Config File**: `next.config.mjs`
  - Sets `basePath: "/belaweb2test"` unconditionally.
  - Adds a redirect from `/` -> `/belaweb2test` for development convenience.
  - Exports `NEXT_PUBLIC_BASE_PATH`.

- **Usage in Code**:
  Do **NOT** hardcode paths like `/image.png`.
  ALWAYS import and use the helper:
  ```typescript
  import { basePath } from "@/lib/utils";
  
  // Correct usage
  <Image src={`${basePath}/image.png`} ... />
  ```

### 2. Static Export
In `next.config.mjs`, `output: 'export'` is set when the environment is production. This generates a purely static HTML/CSS/JS site located in the `out/` folder, which can be hosted on any web server without Node.js.

### 3. Localization (i18n)
Localization is handled client-side via `contexts/language-context.tsx`.
- **Content**: Translations are stored in `lib/translations.ts`.
- **Dynamic Content**: Data objects in `lib/data.ts` have fields for both languages (e.g., `title` and `titleNe`).

### 4. Theming
Dark/Light mode is implemented using `next-themes` wrapped in `contexts/theme-context.tsx`. Tailwind is configured with `darkMode: "class"`.
