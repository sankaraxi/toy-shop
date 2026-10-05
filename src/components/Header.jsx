import React from 'react';
import { ShoppingBag, Heart, Search, Sparkles } from 'lucide-react';

export default function Header({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenGiftFinder,
  searchQuery,
  onSearchChange,
  activeSection,
  onNavigate
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Slim promo banner under 40px height adhering to promotional restraint */}
      <div className="bg-amber-900 text-amber-50 text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        Complimentary gift wrapping & free carbon-neutral shipping on orders over $50
      </div>

      {/* Top Bar Contract: 3 zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => onNavigate('home')} 
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-display text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
            WonderKind Toys
          </span>
        </button>

        {/* Zone 2: Clean 4 nav links with subtle hover underline */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('catalog')}
            className={`transition-colors hover:text-stone-900 py-1 border-b-2 ${
              activeSection === 'catalog' ? 'border-amber-700 text-stone-900' : 'border-transparent'
            }`}
          >
            Playthings Catalog
          </button>
          <button
            onClick={onOpenGiftFinder}
            className="flex items-center gap-1.5 text-stone-600 hover:text-amber-800 transition-colors py-1 border-b-2 border-transparent"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Gift Matcher</span>
          </button>
          <button
            onClick={() => onNavigate('craftsmanship')}
            className={`transition-colors hover:text-stone-900 py-1 border-b-2 ${
              activeSection === 'craftsmanship' ? 'border-amber-700 text-stone-900' : 'border-transparent'
            }`}
          >
            Our Workshop
          </button>
          <button
            onClick={() => onNavigate('reviews')}
            className={`transition-colors hover:text-stone-900 py-1 border-b-2 ${
              activeSection === 'reviews' ? 'border-amber-700 text-stone-900' : 'border-transparent'
            }`}
          >
            Parents & Reviews
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Input */}
          <div className="relative hidden sm:block w-48 lg:w-60">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search wooden toys, STEM..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-100/80 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all"
            />
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="p-2 text-stone-600 hover:text-amber-700 hover:bg-stone-100/80 rounded-lg transition-colors relative"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Drawer Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all whitespace-nowrap active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Play Bag</span>
            <span className="bg-amber-600 px-1.5 py-0.5 rounded text-[11px] font-mono tabular-nums leading-none">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
