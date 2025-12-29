import { Car } from "@/types/car";
import { Button } from "@/components/ui/button";
import { MessageCircle, Fuel, Settings, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `Halo, saya tertarik dengan ${car.brand} ${car.name} ${car.year}. Bisa tolong berikan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border">
      {/* Image Carousel */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
        <Carousel className="w-full">
          <CarouselContent>
            {car.images.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`${car.brand} ${car.name} - Image ${index + 1}`}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {car.images.length > 1 && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium z-10">
          {car.year}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Header */}
        <div>
          <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            {car.brand} {car.name}
          </h3>
          <p className="text-muted-foreground text-sm">{car.type}</p>
        </div>
        
        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Fuel className="w-3 h-3" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Settings className="w-3 h-3" />
            <span>{car.transmission}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-foreground">Fitur Utama:</h4>
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
              >
                {feature}
              </span>
            ))}
            {car.features.length > 3 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{car.features.length - 3} lainnya
              </span>
            )}
          </div>
        </div>
        
        {/* Price & Action */}
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Mulai dari</p>
              <p className="font-bold text-lg text-primary">{car.price}</p>
            </div>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Tanya
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;