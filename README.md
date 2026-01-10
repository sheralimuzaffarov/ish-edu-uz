# Education Jobs Website - Vakant Lavozimlar

Official website for vacant positions in education - Ministry of Preschool and School Education of the Republic of Uzbekistan.

## 🌟 Overview

This is a modern, responsive web application that allows users to browse and search for teaching positions and educational job vacancies across Uzbekistan. The platform provides comprehensive filtering options, multi-language support, and a user-friendly interface for job seekers in the education sector.

## ✨ Features

- 🔍 **Advanced Filtering**: Filter vacancies by region, district, school, position level, and position type
- 🌐 **Multi-language Support**: Available in Uzbek (uz), Russian (ru), English (en), and Karakalpak (kr)
- 📱 **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- 🔎 **Search Functionality**: Search and filter job vacancies with real-time results
- 📋 **Detailed Vacancy Information**: View comprehensive details about each position including salary, requirements, and deadlines
- 🔗 **URL Synchronization**: Filter state is synchronized with URL parameters for easy sharing
- 📄 **Pagination**: Efficient pagination for browsing large numbers of vacancies
- 🎨 **Modern UI**: Built with Radix UI components and Tailwind CSS for a polished user experience
- 🔐 **SEO Optimized**: Comprehensive SEO meta tags, Open Graph, Twitter Cards, and structured data
- 📱 **PWA Ready**: Progressive Web App manifest for installable web app capabilities

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3** - UI library
- **TypeScript 5.5** - Type-safe JavaScript
- **Vite 5.4** - Build tool and dev server
- **Zustand 4.5** - State management

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-dialog` - Modal dialogs
  - `@radix-ui/react-select` - Select components
  - `@radix-ui/react-icons` - Icon library
- **Lucide React** - Icon components

### Internationalization
- **i18next 25.7** - Internationalization framework
- **react-i18next 16.5** - React bindings for i18next

### Data & Validation
- **Axios 1.7** - HTTP client
- **Zod 3.23** - Schema validation
- **date-fns 3.6** - Date utility library

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.x or higher recommended)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-ish-edu
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` and will automatically open in your browser.

### Building for Production

Build the application for production:

```bash
npm run build
```

The production build will be created in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
new-ish-edu/
├── public/                 # Static assets
│   ├── img/               # Images
│   ├── favicon.svg        # Favicon
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   └── site.webmanifest   # PWA manifest
├── src/
│   ├── app/               # App-level components and styles
│   │   ├── App.tsx
│   │   └── index.css
│   ├── entities/          # Business entities (Feature-Sliced Design)
│   │   ├── position/     # Position entity
│   │   ├── region/       # Region entity
│   │   ├── school/       # School entity
│   │   └── vacancy/      # Vacancy entity
│   ├── features/          # Feature modules
│   │   └── filters/      # Filtering functionality
│   ├── pages/             # Page components
│   │   └── home/         # Home page
│   ├── shared/            # Shared utilities and components
│   │   ├── api/          # API client and endpoints
│   │   ├── lib/          # Libraries (i18n, schemas, utils)
│   │   ├── types/        # TypeScript types
│   │   └── ui/           # Shared UI components (SEOHead)
│   └── widgets/           # Complex UI components
│       ├── header/       # Header component
│       ├── pagination/   # Pagination component
│       ├── vacancy-detail/ # Vacancy detail modal
│       └── vacancy-table/ # Vacancy table component
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## 🌍 Internationalization

The application supports four languages:

- **Uzbek (uz)** - Default language
- **Russian (ru)**
- **English (en)**
- **Karakalpak (kr)**

Language files are located in `src/shared/lib/i18n/locales/`. The language preference is stored in localStorage and persists across sessions.

## 🔌 API Integration

The application connects to the Ministry of Education API:

- **Base URL**: `https://ish.uzedu.uz/api/api`
- **Endpoints**:
  - Vacancies: `/school-job-vacancies`
  - Vacancy Details: `/school-job-vacancies/{id}`
  - Regions: `/erp-regions`
  - Districts: `/erp-rayons/{regionId}`
  - Schools: `/erp-schools`
  - Position Levels: `/position/levels`
  - Positions: `/position/index`

API endpoints are configured in `src/shared/api/endpoints.ts`.

## 🎨 Styling

The project uses **Tailwind CSS** for styling with a custom configuration. Utility classes are used throughout the application for consistent styling and responsive design.

## 🔍 SEO Features

The application includes comprehensive SEO optimization:

- ✅ Meta tags (description, keywords, author)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ Multi-language hreflang tags
- ✅ Structured data (JSON-LD) for Organization and WebSite schemas
- ✅ Canonical URLs
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ PWA manifest
- ✅ Favicon support for all devices

## 📱 Progressive Web App

The application includes a PWA manifest (`site.webmanifest`) that enables:

- Installable web app capabilities
- Theme color customization
- Standalone display mode
- Offline-ready architecture (can be extended)

## 🧩 Key Components

### Filtering System
- **RegionSelect**: Filter by region/city/republic
- **RayonSelect**: Filter by district/city (dependent on region)
- **SchoolSelect**: Filter by specific schools
- **PositionLevelSelect**: Filter by position level
- **PositionSelect**: Filter by position type

### Vacancy Display
- **VacancyTable**: Main table displaying vacancy listings
- **MobileVacancyCard**: Mobile-optimized vacancy cards
- **VacancyDetailModal**: Detailed view of individual vacancies
- **Pagination**: Navigate through multiple pages of results

## 🔧 Configuration

### Environment Variables

Currently, the API base URL is hardcoded in the configuration files. For production, consider using environment variables:

```typescript
// vite.config.ts or .env file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://ish.uzedu.uz/api/api';
```

### Path Aliases

The project uses path aliases for cleaner imports:

- `@/` maps to `src/`

Example:
```typescript
import { Header } from '@/widgets/header/ui/Header';
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 👥 Author

Ministry of Preschool and School Education of the Republic of Uzbekistan

## 🔗 Links

- **Production URL**: [https://ish.uzedu.uz](https://ish.uzedu.uz)
- **API Base URL**: [https://ish.uzedu.uz/api/api](https://ish.uzedu.uz/api/api)

## 📞 Support

For issues, questions, or support, please contact the Ministry of Preschool and School Education of the Republic of Uzbekistan.

---

**Note**: This is the official website for vacant positions in education. For the most up-to-date information, please visit the production site.
