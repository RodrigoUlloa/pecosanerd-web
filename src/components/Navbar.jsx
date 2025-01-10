import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex h-12 items-center gap-1 rounded-full bg-black/80 px-6 backdrop-blur-md">
        <a
          href="#"
          className="px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          Inicio
        </a>
        
        <span className="text-white/20">·</span>
        
        <a
          href="#"
          className="px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          Experiencia
        </a>
        
        <span className="text-white/20">·</span>
        
        <a
          href="#"
          className="px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          Proyectos
        </a>
        
        <span className="text-white/20">·</span>
        
        <a
          href="#"
          className="px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          Sobre mí
        </a>
        
        <span className="text-white/20">·</span>
        
        <button className="group flex items-center gap-2 px-3 py-2 text-sm text-white/70 transition-colors hover:text-white">
          <span className="inline-block h-4 w-4">
            <img
              src="https://flagcdn.com/cl.svg"
              alt="Español"
              className="h-full w-full object-cover"
            />
          </span>
          Español
        </button>
        
        <span className="text-white/20">·</span>
        
        <button
          onClick={() => setIsDark(!isDark)}
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;