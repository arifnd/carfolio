import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = 'Halo, saya ingin mengetahui lebih lanjut tentang katalog mobil Anda';
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="kontak" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda menemukan mobil yang tepat. 
              Dapatkan konsultasi gratis dan penawaran terbaik.
            </p>
          </div>
          
          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
            {/* Contact Info */}
            <div className="flex flex-col justify-between gap-4 h-full">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border flex-1 flex items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">Telepon</h3>
                    <p className="text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border flex-1 flex items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">Alamat</h3>
                    <p className="text-muted-foreground">Jl. Sudirman No. 123, Jakarta Pusat</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border flex-1 flex items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">Jam Buka</h3>
                    <p className="text-muted-foreground">Senin - Sabtu: 08.00 - 17.00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="h-full">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">
                  Chat WhatsApp
                </h3>
                <p className="text-gray-600 mb-6">
                  Konsultasi langsung dengan tim ahli kami. Respon cepat dan terpercaya!
                </p>
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="w-full text-lg py-3 h-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Mulai Chat
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Siap Menemukan Mobil Impian Anda?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim profesional kami akan membantu Anda 
              mendapatkan mobil terbaik dengan harga yang kompetitif.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-3 h-auto"
            >
              Hubungi Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;