import React from 'react';
import { Heart, Plus, Star, Eye } from 'lucide-react';
import ToyVisual from './ToyVisual';

export default function ProductCard({ 
  toy, 
  isWishlisted, 
  onToggleWishlist, 
  onAddToCart, 
  onQuickView 
}) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      {/* Visual Slot */}
      <div 
        className="relative h-60 w-full p-4 flex items-center justify-center cursor-pointer transition-colors"
        style={{ backgroundColor: toy.bgColor || '#FAF8F5' }}
        onClick={() => onQuickView(toy)}
      >
        <ToyVisual 
          type={toy.visualType} 
          name={toy.name} 
          className="w-full h-full max-h-52 transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Quick View overlay trigger button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(toy);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/90 hover:bg-stone-900 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg backdrop-blur-xs flex items-center gap-1.5 shadow-md"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>

        {/* Top-right Heart / Wishlist action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(toy.id);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-stone-600 hover:text-red-500 shadow-xs transition-colors"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-500'
            }`} 
          />
        </button>

        {/* Subtle status text (single subtle editorial tag) */}
        {toy.badge && (
          <div className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded">
            {toy.badge}
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Unboxed Metadata with subtle dot separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="capitalize">{toy.category}</span>
            <span aria-hidden="true">·</span>
            <span>{toy.ageLabel}</span>
            <span aria-hidden="true">·</span>
            <div className="flex items-center text-amber-700">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-0.5 inline" />
              <span className="font-mono tabular-nums">{toy.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(toy)}
            className="font-display text-base font-semibold text-stone-900 hover:text-amber-800 transition-colors line-clamp-1 cursor-pointer"
          >
            {toy.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
            {toy.shortDescription}
          </p>
        </div>

        {/* Price & Add to Cart Action Bar */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-base font-bold text-stone-900 tabular-nums">
              ${toy.price.toFixed(2)}
            </span>
            {toy.originalPrice && (
              <span className="font-mono text-xs text-stone-400 line-through tabular-nums">
                ${toy.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(toy)}
            className="px-3.5 py-1.5 text-xs font-semibold text-stone-900 bg-amber-100/80 hover:bg-amber-200 border border-amber-300/80 rounded-lg transition-colors flex items-center gap-1 active:scale-95 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
