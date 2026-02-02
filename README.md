# keto.fr

A modern, responsive blog platform dedicated to the Keto and Low Carb diet, focusing on mental health, focus, and energy optimization. This project provides a scientific and minimalist approach to nutrition.

## 🚀 Features

- **Home Page**:
  - Engaging Hero section with a clear value proposition.
  - Featured articles grid with responsive design.
  - Value proposition section highlighting the benefits of the Low Carb lifestyle.
- **Article Page**:
  - Detailed article view with reading time, author, and tags.
  - Related articles suggestion.
  - Mock comment section.
  - Social sharing options.
- **About Page**:
  - Mission statement and core values.
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
- **SEO Optimized**: Uses `react-helmet-async` for managing document head tags.

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd keto.fr
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📁 Project Structure

```
keto.fr/
├── components/       # Reusable UI components (ArticleCard, Layout, etc.)
├── pages/            # Page components (Home, Article, About)
├── App.tsx           # Main application component and routing setup
├── constants.ts      # Static data (articles, site info)
├── index.html        # Entry HTML file (includes Tailwind CDN)
├── index.tsx         # Application entry point
├── types.ts          # TypeScript type definitions
└── vite.config.ts    # Vite configuration
```

## 🎨 Styling

This project currently uses Tailwind CSS via a CDN link in `index.html`.
> **Note**: For a production deployment, it is recommended to set up Tailwind CSS as a PostCSS plugin to enable tree-shaking and better performance.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT](LICENSE)
