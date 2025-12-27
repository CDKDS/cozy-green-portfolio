import { ArrowDown } from "lucide-react";

interface HomeSectionProps {
  onNavigate: (tab: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-2xl text-center animate-fade-in">
        {/* Decorative element */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-matcha-light flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-3xl">🍃</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 tracking-wide uppercase text-sm">
          Welcome to my corner
        </p>
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
          Hi, I'm <span className="text-primary">Alex Chen</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Software Engineer
        </p>
        
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-12">
          I craft elegant solutions to complex problems, with a passion for clean code 
          and thoughtful design. Currently building delightful experiences at scale.
        </p>

        <button
          onClick={() => onNavigate("experience")}
          className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <span className="text-sm tracking-wide">Explore my work</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-matcha-light/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default HomeSection;
