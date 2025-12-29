import { cars } from "@/data/cars";
import CarCard from "./CarCard";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

const Catalog = () => {
  const [filters, setFilters] = useState({
    brand: "all",
    type: "all",
    fuelType: "all",
    transmission: "all"
  });

  // Get unique values for filter options
  const filterOptions = useMemo(() => ({
    brands: [...new Set(cars.map(car => car.brand))].sort(),
    types: [...new Set(cars.map(car => car.type))].sort(),
    fuelTypes: [...new Set(cars.map(car => car.fuelType))].sort(),
    transmissions: [...new Set(cars.map(car => car.transmission))].sort()
  }), []);

  // Filter cars based on selected filters
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      return (
        (filters.brand === "all" || car.brand === filters.brand) &&
        (filters.type === "all" || car.type === filters.type) &&
        (filters.fuelType === "all" || car.fuelType === filters.fuelType) &&
        (filters.transmission === "all" || car.transmission === filters.transmission)
      );
    });
  }, [filters]);

  const updateFilter = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      brand: "all",
      type: "all",
      fuelType: "all",
      transmission: "all"
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== "all");

  return (
    <section id="katalog" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Katalog Mobil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan mobil terbaik dengan berbagai kategori sesuai kebutuhan Anda
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="bg-muted/30 rounded-lg p-4 md:p-6 border border-border">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">
                {/* Brand Filter */}
                <div>
                  <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                    Brand
                  </label>
                  <Select value={filters.brand} onValueChange={(value) => updateFilter("brand", value)}>
                    <SelectTrigger className="bg-background w-full">
                      <SelectValue placeholder="Semua Brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border shadow-lg z-50">
                      <SelectItem value="all">Semua Brand</SelectItem>
                      {filterOptions.brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                    Tipe
                  </label>
                  <Select value={filters.type} onValueChange={(value) => updateFilter("type", value)}>
                    <SelectTrigger className="bg-background w-full">
                      <SelectValue placeholder="Semua Tipe" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border shadow-lg z-50">
                      <SelectItem value="all">Semua Tipe</SelectItem>
                      {filterOptions.types.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                    Bahan Bakar
                  </label>
                  <Select value={filters.fuelType} onValueChange={(value) => updateFilter("fuelType", value)}>
                    <SelectTrigger className="bg-background w-full">
                      <SelectValue placeholder="Semua Bahan Bakar" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border shadow-lg z-50">
                      <SelectItem value="all">Semua Bahan Bakar</SelectItem>
                      {filterOptions.fuelTypes.map(fuelType => (
                        <SelectItem key={fuelType} value={fuelType}>{fuelType}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Transmission Filter */}
                <div>
                  <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                    Transmisi
                  </label>
                  <Select value={filters.transmission} onValueChange={(value) => updateFilter("transmission", value)}>
                    <SelectTrigger className="bg-background w-full">
                      <SelectValue placeholder="Semua Transmisi" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border shadow-lg z-50">
                      <SelectItem value="all">Semua Transmisi</SelectItem>
                      {filterOptions.transmissions.map(transmission => (
                        <SelectItem key={transmission} value={transmission}>{transmission}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Clear Filters Button */}
              {hasActiveFilters && (
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <X className="w-4 h-4" />
                  Hapus Filter
                </Button>
              )}
            </div>

            {/* Results Count */}
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
              <p className="text-xs md:text-sm text-muted-foreground">
                Menampilkan <span className="font-semibold text-foreground">{filteredCars.length}</span> dari {cars.length} mobil
                {hasActiveFilters && (
                  <span className="ml-2 text-primary">
                    (dengan filter aktif)
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        
        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              Tidak ada mobil yang sesuai dengan filter yang dipilih
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Hapus Semua Filter
            </Button>
          </div>
        )}
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tidak menemukan mobil yang Anda cari?
          </p>
          <button 
            onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya mencari mobil dengan spesifikasi tertentu. Bisa dibantu?', '_blank')}
            className="text-primary hover:text-primary-dark underline underline-offset-4 transition-colors"
          >
            Hubungi kami untuk konsultasi lebih lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;