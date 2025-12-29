import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              CarCatalog
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('katalog')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              Katalog
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              Kontak
            </button>
            <button 
              onClick={() => scrollToSection('terms')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-white/70'
              }`}
            >
              Syarat & Ketentuan
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan katalog mobil Anda', '_blank')}
              className={`transition-all ${
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white hover:bg-white/90 text-primary border border-white/20'
              }`}
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'hover:bg-muted' : 'hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('katalog')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
              >
                Katalog
              </button>
              <button 
                onClick={() => scrollToSection('kontak')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
              >
                Kontak
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
              >
                Syarat & Ketentuan
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan katalog mobil Anda', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                >
                  Hubungi Kami
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;