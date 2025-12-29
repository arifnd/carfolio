import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToKatalog = () => {
    document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary-dark text-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Temukan Mobil
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Impian Anda
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Katalog mobil terlengkap dengan pilihan terbaik untuk kebutuhan Anda. 
            Dapatkan penawaran terbaik dan konsultasi gratis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToKatalog}
              className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90 hover:text-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Lihat Katalog
              <ArrowDown className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan katalog mobil Anda', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-blue-200" />
      </div>
    </section>
  );
};

export default Hero;