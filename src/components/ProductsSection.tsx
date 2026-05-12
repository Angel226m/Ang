import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { products, categories } from '../data/products';
import type { Category } from '../types';
import { Sparkle } from './decorative/Sparkle';

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos');

  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="productos" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkle className="w-5 h-5" delay={0} />
            <Sparkle className="w-4 h-4" delay={200} />
            <Sparkle className="w-5 h-5" delay={400} />
          </div>
          <h2 className="font-display font-bold text-4xl text-brand-dark mb-3">
            Nuestro Catálogo
          </h2>
          <p className="font-script text-2xl text-brand-pink-deep">
            Encuentra tu accessory favorito 💕
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-body font-medium text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-brand-pink-hot text-white shadow-pink'
                  : 'bg-white text-brand-dark hover:bg-brand-pink/30'
              }`}
            >
              <span className="mr-1">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-brand-dark/60">
              No hay productos en esta categoría todavía 💕
            </p>
          </div>
        )}
      </div>
    </section>
  );
}