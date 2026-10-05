import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import ToyVisual from './ToyVisual';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  allToys,
  onRemoveWishlist,
  onMoveToCart
}) {
  if (!isOpen) return null;

  const wishlistedToys = allToys.filter((t) => wishlistIds.includes(t.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
              <h2 className="font-display text-lg font-bold text-stone-900">
                Saved Playthings
              </h2>
              <span className="font-mono text-xs font-semibold text-stone-500 bg-stone-200/80 px-2 py-0.5 rounded-full tabular-nums">
                {wishlistedToys.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-200/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-100">
            {wishlistedToys.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-3xl">
                  ❤️
                </div>
                <h3 className="font-display text-base font-bold text-stone-800">
                  No saved playthings yet
                </h3>
                <p className="text-xs text-stone-500 max-w-xs">
                  Tap the heart icon on any toy to curate birthday wishlists and holiday gift ideas.
                </p>
              </div>
            ) : (
              wishlistedToys.map((toy) => (
                <div key={toy.id} className="py-4 flex gap-4 first:pt-0 last:pb-0 items-center">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center p-1.5 shrink-0"
                    style={{ backgroundColor: toy.bgColor || '#FAF8F5' }}
                  >
                    <ToyVisual type={toy.visualType} name={toy.name} className="w-full h-full" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-semibold text-stone-900 truncate">
                      {toy.name}
                    </h4>
                    <div className="text-[11px] text-stone-500">
                      {toy.category} · {toy.ageLabel}
                    </div>
                    <div className="font-mono text-xs font-bold text-stone-900 mt-1 tabular-nums">
                      ${toy.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 items-end">
                    <button
                      onClick={() => onMoveToCart(toy)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg flex items-center gap-1 shadow-xs cursor-pointer transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onRemoveWishlist(toy.id)}
                      className="text-[11px] text-stone-400 hover:text-red-600 flex items-center gap-0.5 pt-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-200 bg-stone-50/50 flex justify-between items-center text-xs text-stone-500">
            <span>Wishlist saved locally to your device</span>
            <button
              onClick={onClose}
              className="font-medium text-stone-800 hover:text-amber-800"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
