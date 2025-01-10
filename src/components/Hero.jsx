import { Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 pt-24 sm:pt-32 md:pt-40">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center text-center text-white">
          <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs sm:text-sm text-green-500">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            Disponible para trabajar
          </div>
          
          <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hola soy Pecosa Nerd
          </h1>
          
          <div className="mt-4 sm:mt-6 max-w-3xl space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl text-white/80">
            Directora de Arte, Dieseño grafico, Fotografia, Dieseñadora de Vestuario. y Creador de Contenido sobre
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80">
              Vida sana, ropa, maquillaje, conciertos, musica <span className="text-white/60">del mejor pais de Chile.</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/70">
              Especializada en atraer generar contenido a diversos clientes.
            </p>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex h-10 sm:h-12 items-center justify-center rounded-md bg-white px-6 sm:px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90"
            >
              Contactame
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-10 sm:h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 sm:px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;