import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-bg-primary via-bg-secondary to-bg-primary text-white py-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute right-1/4 top-0 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">rahul_is_busy</span>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/rahulisbusy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 hover:bg-purple-600/50 transition-all duration-500 ease-in-out transform "
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            
            <a
              href="https://www.linkedin.com/in/pritam-chakraborty-0b74b4243/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 hover:bg-blue-600/50 transition-all ease-in-out duration-500  transform "
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            
            <a
              href="mailto:rahulchakraborty2003@gmail.com"
              className="p-2 rounded-full bg-gray-800/50 hover:bg-green-600/50 transition-all ease-in-out duration-500 transform "
              aria-label="Email"
            >
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
          
          {/* Tech stack - compact */}
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <span className="text-blue-400 font-medium">React</span>
            <span>+</span>
            <span className="text-cyan-400 font-medium">Tailwind</span>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-60"></div>
    </footer>
  );
};

export default Footer;