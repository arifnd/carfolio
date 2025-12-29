import { Car } from '@/types/car';

// Import car images
import sedanSilver from '@/assets/sedan-silver.jpg';
import suvBlue from '@/assets/suv-blue.jpg';
import hatchbackRed from '@/assets/hatchback-red.jpg';
import pickupBlack from '@/assets/pickup-black.jpg';
import compactWhite from '@/assets/compact-white.jpg';
import crossoverGray from '@/assets/crossover-gray.jpg';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Camry Hybrid',
    brand: 'Toyota',
    type: 'Sedan',
    year: 2024,
    price: 'Rp 650.000.000',
    images: [sedanSilver, suvBlue, hatchbackRed],
    features: ['Hybrid Engine', 'Leather Seats', 'Sunroof', 'Advanced Safety'],
    fuelType: 'Hybrid',
    transmission: 'CVT'
  },
  {
    id: '2',
    name: 'Fortuner VRZ',
    brand: 'Toyota',
    type: 'SUV',
    year: 2024,
    price: 'Rp 580.000.000',
    images: [suvBlue, pickupBlack, sedanSilver],
    features: ['4WD System', 'Captain Seats', '360° Camera', 'Diesel Engine'],
    fuelType: 'Diesel',
    transmission: 'Automatic'
  },
  {
    id: '3',
    name: 'Jazz RS',
    brand: 'Honda',
    type: 'Hatchback',
    year: 2024,
    price: 'Rp 285.000.000',
    images: [hatchbackRed, compactWhite, crossoverGray],
    features: ['Sport Mode', 'Smart Entry', 'Touchscreen', 'Paddle Shift'],
    fuelType: 'Bensin',
    transmission: 'CVT'
  },
  {
    id: '4',
    name: 'Hilux Double Cab',
    brand: 'Toyota',
    type: 'Pickup',
    year: 2024,
    price: 'Rp 425.000.000',
    images: [pickupBlack, suvBlue, sedanSilver],
    features: ['4x4 System', '1 Ton Payload', 'Hill Start Assist', 'Towing Capacity'],
    fuelType: 'Diesel',
    transmission: 'Manual'
  },
  {
    id: '5',
    name: 'Brio Satya',
    brand: 'Honda',
    type: 'City Car',
    year: 2024,
    price: 'Rp 165.000.000',
    images: [compactWhite, hatchbackRed, crossoverGray],
    features: ['Eco Mode', 'Compact Design', 'Fuel Efficient', 'Easy Parking'],
    fuelType: 'Bensin',
    transmission: 'Manual'
  },
  {
    id: '6',
    name: 'HR-V Hybrid',
    brand: 'Honda',
    type: 'Crossover',
    year: 2024,
    price: 'Rp 495.000.000',
    images: [crossoverGray, sedanSilver, suvBlue],
    features: ['Hybrid Technology', 'Panoramic Sunroof', 'Honda Sensing', 'Spacious Interior'],
    fuelType: 'Hybrid',
    transmission: 'CVT'
  }
];