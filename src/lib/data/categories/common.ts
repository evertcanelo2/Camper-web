import { ProductColor, ProductSize } from '../../types';

export const defaultColors: ProductColor[] = [
  { name: 'Black', hex: '#000000', available: true },
  { name: 'Cream', hex: '#FFFDD0', available: true },
  { name: 'Forest Green', hex: '#228B22', available: false },
  { name: 'Aquamarine', hex: '#7FFFD4', available: false },
  { name: 'Off White', hex: '#F8F8FF', available: true },
  { name: 'Grey', hex: '#808080', available: true },
];

export const defaultSizes: ProductSize[] = [
  { name: 'XS', available: true },
  { name: 'S', available: true },
  { name: 'M', available: true },
  { name: 'L', available: true },
  { name: 'XL', available: true },
  { name: 'XXL', available: false },
];

export const defaultDescription = "Una prenda esencial diseñada bajo la filosofía del minimalismo y la elegancia atemporal. Confeccionada con materiales premium para garantizar comodidad, durabilidad y un ajuste perfecto para cualquier ocasión. Ideal para el día a día.";
