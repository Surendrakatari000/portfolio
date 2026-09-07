# 🚀 Surendra Katari — Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**, featuring a professional dark theme with blue/cyan accents, smooth scroll animations, and interactive elements.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Custom_Properties-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Animated Hero Section** — Gradient background with floating particles and staggered text animations
- **About Me** — Professional bio with animated stat counter cards
- **Skills & Tech Stack** — Categorized skill cards (Frontend, Backend, Databases, AI/ML, Tools)
- **Featured Projects** — Interactive project cards with live links and GitHub repos
- **DSA & Competitive Programming** — LeetCode & Codeforces stats with animated counters
- **Work Experience** — Vertical timeline with internship details and document links
- **Education** — Academic background card
- **Contact** — Contact form with email, phone, GitHub, and LinkedIn
- **Fully Responsive** — Mobile-first design with hamburger navigation
- **Scroll Reveal Animations** — Elements animate into view on scroll using Intersection Observer

## 🛠️ Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Build Tool   | [Vite](https://vitejs.dev/)         |
| Framework    | [React 18](https://react.dev/)      |
| Styling      | Vanilla CSS with CSS Custom Properties |
| Icons        | [Lucide React](https://lucide.dev/) |
| Fonts        | Google Fonts — Inter & Outfit       |
| Animations   | CSS Animations + Intersection Observer |

## 📁 Project Structure

```
portfolio/
├── index.html                  # Entry HTML with SEO meta tags
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Main app — assembles all sections
│   ├── App.css                 # Global design system & CSS variables
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with glassmorphism
│   │   ├── Hero.jsx            # Animated hero with particles
│   │   ├── About.jsx           # Bio & animated stat cards
│   │   ├── Skills.jsx          # Categorized tech stack grid
│   │   ├── Projects.jsx        # Project showcase cards
│   │   ├── DSA.jsx             # LeetCode & Codeforces stats
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Education.jsx       # Academic background
│   │   ├── Contact.jsx         # Contact form & info
│   │   └── Footer.jsx          # Footer with social links
│   ├── hooks/
│   │   └── useScrollReveal.js  # Intersection Observer hook
│   └── styles/
│       ├── navbar.css
│       ├── hero.css
│       ├── about.css
│       ├── skills.css
│       ├── projects.css
│       ├── dsa.css
│       ├── experience.css
│       ├── education.css
│       ├── contact.css
│       └── footer.css
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Surendrakatari000/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Color Palette

| Token         | Hex       | Usage              |
| ------------- | --------- | ------------------ |
| Primary       | `#0ea5e9` | Buttons, links     |
| Primary Light | `#38bdf8` | Highlights, glows  |
| Accent        | `#06b6d4` | Secondary accents  |
| Background    | `#0a0f1e` | Page background    |
| Surface       | `#1e293b` | Cards, sections    |
| Text Primary  | `#f1f5f9` | Headings           |
| Text Secondary| `#94a3b8` | Body text          |

## 📬 Contact

- **Email**: [surendrakatari353@gmail.com](mailto:surendrakatari353@gmail.com)
- **LinkedIn**: [surendra-katari](https://www.linkedin.com/in/surendra-katari/)
- **GitHub**: [Surendrakatari000](https://github.com/Surendrakatari000)
- **LeetCode**: [surendra_katari](https://leetcode.com/u/surendra_katari/)
- **Codeforces**: [surendrakatari353](https://codeforces.com/profile/surendrakatari353)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Surendra Katari**
