import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  nextjs,
  vscode,
  postman,
  express,
  flutter,
  gemini,
  vercel,
  figma,
  docker,
  dt,
  gdsc,
  threejs,
  promptlyai,
  orionai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Redux Toolkit",  
    icon: redux,
  },
  {
    name: "Express JS",
    icon: express,
  }
  
];


const experiences = [
  {
    title: "Flutter Developer (Extended Core Member)",
    company_name: "GDSC - Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "#ffffff",
    date: "Aug 2023 - Mar 2024",
    points: [
      "Contributed to building cross-platform mobile apps using Flutter and Dart.",
      "Collaborated with team members during workshops and project development phases.",
      "Focused on clean UI, efficient state management, and API integration.",
      "Helped peers with debugging and optimizing performance for mobile apps.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "DeepThought",
    icon: dt,
    iconBg: "#ffffff",
    date: "Jan 2024 - Mar 2024",
    points: [
      "Designed and developed interactive web modules for selection process rounds.",
      "Used React.js for frontend and Node.js with MongoDB for backend APIs.",
      "Worked closely with design and research teams to iterate based on user feedback.",
      "Followed a problem-solving and product-oriented mindset with full stack responsibility.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Orion-AI",
    description:
      "Real-time voice-based AI assistant using Deepgram for speech recognition and Gemini API for smart responses. Features ElevenLabs TTS and a clean Next.js frontend for seamless interaction.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "deepgram",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "elevenlabs",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "vercel",
        color: "purple-text-gradient",
      },
      
      {
        name: "typescript",
        color: "red-text-gradient",
      },
      {
        name:"shadcn",
        color: "cyan-text-gradient",
      }
      ,{
        name: "convex",
        color: "green-text-gradient",
      }
    ],
    image: orionai, 
    source_code_link: "https://github.com/rahulisbusy/OrionAI-AI-Coaching-Voice-Agent",
    deployment_link: "https://orion-ai-ai-coaching-voice-agent.vercel.app/",
  },
  {
    name: "PromptlyAI - Content Generator",
    description:
      "AI-powered content generation platform that helps users create tailored blog intros, product descriptions, and social captions using LLM prompts with a clean and intuitive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        
      },
       {
        name:"shadcn",
        color: "cyan-text-gradient",
      },
       {
        name: "nextjs",
        color: "purple-text-gradient",
      },
      {
        name: "vercel",
        color: "orange-text-gradient",
      },
      {
        name: "razorpay",
        color: "yellow-text-gradient",
      },{
        name: "clerk",
        color: "green-text-gradient",
      }
    ],
    image: promptlyai, // Replace with your actual image variable
    source_code_link: "https://github.com/rahulisbusy/Promptly-AI-CONTENT-",
    deployment_link: "https://promptly-ai-content.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };