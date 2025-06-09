# 🚀 Portfolio Website

A modern, interactive, and responsive developer portfolio built with **React**, **Three.js (react-three-fiber)**, **Tailwind CSS**, and **Framer Motion**.  
Showcase your projects, skills, and contact info with beautiful 3D visuals and smooth animations.

---

## ✨ Features

- **3D Hero Section**: Animated 3D computer model using Three.js and react-three-fiber.
- **Responsive Design**: Looks great on all devices.
- **Project Showcase**: Highlight your best work with tags, live links, and source code.
- **Tech Stack Badges**: Colorful, gradient-tagged skills and technologies.
- **Contact Form**: EmailJS-powered form with toast notifications.
- **Animated Transitions**: Framer Motion for smooth page and element transitions.
- **Dark Modern UI**: Tailwind CSS for rapid, beautiful styling.
- **Social Footer**: Professional footer with animated social icons.

---


## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Icons](https://react-icons.github.io/react-icons/) or [Font Awesome](https://fontawesome.com/)

---

## 🚦 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/rahulisbusy/Personal-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

4. **Open in your browser**
   ```
   http://localhost:5173
   ```

---

## ⚙️ Configuration

- **EmailJS**:  
  Create a free [EmailJS](https://www.emailjs.com/) account and add your service ID, template ID, and public key in the `Contact.jsx` file.

- **3D Models**:  
  Place your `.gltf` or `.glb` models in the `public` folder or update the paths in the code.

- **Font Awesome**:  
  Add this to your `public/index.html` `<head>` for social icons:
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  ```
  Or use [react-icons](https://react-icons.github.io/react-icons/).

---

## 📁 Project Structure

```
src/
  components/
    canvas/         # 3D Canvas components (Computers, Earth, etc.)
    ...
  constants/        # Project data (projects, tech, etc.)
  styles/           # Tailwind and custom CSS
  App.jsx
  main.jsx
public/
  desktop_pc/scene.gltf
  ...
```

---

## 🙋‍♂️ Customization

- **Update your info** in `constants/index.js` (projects, skills, links).
- **Change colors** in `index.css` or Tailwind config.
- **Swap 3D models** in `canvas/Computers.jsx` and `canvas/Earth.jsx`.
- **Edit footer/social links** in `Footer.jsx`.

---

## 📦 Deployment

Deploy easily to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static hosting provider.

---

## 📝 License

MIT License.  
Feel free to use, modify, and share!

---

## 🙌 Credits

- [Three.js Journey](https://threejs-journey.com/)
- [JavaScript Mastery](https://www.jsmastery.pro/)
- [Font Awesome](https://fontawesome.com/)
- [EmailJS](https://www.emailjs.com/)

---

> Made with ❤️ by [rahul_is_busy](https://github.com/rahulisbusy)