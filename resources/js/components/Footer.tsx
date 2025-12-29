import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-foreground">
                CarCatalog
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Temukan mobil impian Anda dengan katalog terlengkap dan harga transparan. Hubungi kami untuk konsultasi gratis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigasi</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('katalog')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Katalog
              </button>
              <button 
                onClick={() => scrollToSection('kontak')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Kontak
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Syarat & Ketentuan
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@carcatalog.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hubungi Kami</h3>
            <p className="text-sm text-muted-foreground">
              Konsultasi gratis untuk menemukan mobil yang tepat untuk Anda.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya tertarik dengan katalog mobil Anda', '_blank')}
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 CarCatalog. Semua hak dilindungi.
            </p>
            <p className="text-sm text-muted-foreground">
              Dibuat dengan ❤️ untuk pecinta otomotif
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;