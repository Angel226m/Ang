export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  category: 'cabello' | 'belleza' | 'llavero' | 'espejo';
  features: string[];
  badge: string;
  quote: string;
  emoji: string;
  color: string;
  image: string;
}

export type Category = 'todos' | 'cabello' | 'belleza' | 'llavero' | 'espejo';

export interface CategoryOption {
  id: Category;
  label: string;
  emoji: string;
}