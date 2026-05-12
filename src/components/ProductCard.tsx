import { MessageCircle } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola! Me interesa el ${product.name} - S/ ${product.price.toFixed(2)}`);
    window.open(`https://wa.me/51926572115?text=${message}`, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-brand-pink-deep/30 hover:shadow-pink-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image placeholder */}
      <div
        className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${product.color}40 0%, ${product.color}20 100%)` }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-body text-xs text-brand-dark">{product.badge}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3 className="font-body font-semibold text-lg text-brand-dark mb-1">
          {product.name}
        </h3>

        {/* Subtitle */}
        <p className="font-body text-sm text-brand-dark/60 mb-3">
          {product.subtitle}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 font-body text-xs text-brand-dark/70">
              <span className="text-brand-heart text-sm">♥</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Quote */}
        <p className="font-script text-sm text-brand-pink-deep italic mb-4">
          "{product.quote}"
        </p>

        {/* Price & CTA */}
        <div className="flex items-end justify-between">
          <div>
            <span className="font-body font-extrabold text-2xl text-brand-pink-hot text-shimmer-gold">
              S/ {product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-brand-pink-hot text-white px-4 py-2 rounded-full font-body font-semibold text-sm hover:bg-brand-pink-deep hover:scale-105 active:scale-95 transition-all duration-200 opacity-100 group-hover:opacity-100"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
}