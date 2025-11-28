# Personal Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, glassmorphic UI with smooth animations and reveal effects
- **Responsive Layout**: Fully responsive across all devices
- **Dynamic Projects**: Auto-fetches latest repositories from GitHub
- **Static Content**: Optimized performance with hard-coded resume content
- **Smooth Navigation**: Anchor-based smooth scrolling between sections
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **Custom Hooks** - Intersection Observer for reveal animations
- **CSS3** - Modern styling with CSS variables and glassmorphism

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   └── SectionHeader.jsx
├── sections/           # Main page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/              # Custom React hooks
│   ├── useReveal.js
│   └── useGithubRepos.js
├── constants/          # Static content
│   └── defaultContent.js
├── App.jsx            # Main app component
├── App.css            # Global styles
└── main.jsx           # Entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HamdiBou/personalPortfolio.git

# Navigate to project directory
cd personalPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit `src/constants/defaultContent.js` to update:
- Hero section (name, title, description, photo, contact info)
- About section (bio paragraphs, stats)
- Skills section (technical skills grouped by category)
- Contact section (email, social links)

### Add Your Photo

Place your photo at `public/hamdi.jpg` or update the `photo` path in `defaultContent.js`

### GitHub Integration

Update the `GITHUB_USERNAME` in `src/App.jsx` to fetch your repositories automatically.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Hamdi Boussarsar**
- GitHub: [@HamdiBou](https://github.com/HamdiBou)
- LinkedIn: [Hamdi Boussarsar](https://www.linkedin.com/in/hamdi-boussarsar-3189ba273/)
- Email: h.boussarsar11@gmail.com
