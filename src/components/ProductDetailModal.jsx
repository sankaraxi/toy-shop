import React, { useState } from 'react';
import { X, Star, Heart, Check, ShieldCheck, Gift, Truck, RefreshCw, Sparkles, Minus, Plus } from 'lucide-react';
import ToyVisual from './ToyVisual';

export default function ProductDetailModal({ 
  toy, 
  onClose, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist 
}) {
  const [quantity, setQuantity] = useState(1);
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);
  const [giftNote, setGiftNote] = useState('');
  const [activeTab, setActiveTab] = useState('details'); // details, specs, safety
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!toy) return null;

  const handleAddToCart = () => {
    onAddToCart({
      ...toy,
      quantity,
      giftWrap: includeGiftWrap,
      giftNote: includeGiftWrap ? giftNote : ''
    });
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visual Showcase */}
          <div 
            className="md:col-span-6 p-6 sm:p-8 flex flex-col items-center justify-center relative min-h-[320px]"
            style={{ backgroundColor: toy.bgColor || '#FAF8F5' }}
          >
            <div className="w-full max-w-xs h-64 sm:h-72 flex items-center justify-center">
              <ToyVisual type={toy.visualType} name={toy.name} className="w-full h-full" />
            </div>

            {/* Subtle Origin badge */}
            <div className="mt-4 text-xs text-stone-600 font-medium flex items-center gap-1.5">
              <span>{toy.origin}</span>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Header metadata */}
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span className="uppercase font-semibold tracking-wider text-amber-800">
                  {toy.category}
                </span>
                <div className="flex items-center gap-1 text-stone-700">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-stone-900 font-mono tabular-nums">{toy.rating}</span>
                  <span className="text-stone-400">({toy.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-900 leading-tight">
                  {toy.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold text-stone-900 tabular-nums">
                    ${toy.price.toFixed(2)}
                  </span>
                  {toy.originalPrice && (
                    <span className="font-mono text-sm text-stone-400 line-through tabular-nums">
                      ${toy.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs text-emerald-700 font-medium ml-2">
                    In Stock ({toy.stockCount} ready to ship)
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed">
                {toy.description}
              </p>

              {/* Tabs for extra details */}
              <div className="border-t border-b border-stone-200/80 py-3">
                <div className="flex gap-4 text-xs font-semibold text-stone-500 mb-2">
                  <button 
                    onClick={() => setActiveTab('details')}
                    className={`pb-1 ${activeTab === 'details' ? 'text-amber-800 border-b-2 border-amber-700' : 'hover:text-stone-800'}`}
                  >
                    Key Features
                  </button>
                  <button 
                    onClick={() => setActiveTab('specs')}
                    className={`pb-1 ${activeTab === 'specs' ? 'text-amber-800 border-b-2 border-amber-700' : 'hover:text-stone-800'}`}
                  >
                    Specifications
                  </button>
                  <button 
                    onClick={() => setActiveTab('safety')}
                    className={`pb-1 ${activeTab === 'safety' ? 'text-amber-800 border-b-2 border-amber-700' : 'hover:text-stone-800'}`}
                  >
                    Safety & Materials
                  </button>
                </div>

                <div className="text-xs text-stone-600">
                  {activeTab === 'details' && (
                    <ul className="space-y-1.5 list-disc pl-4">
                      {toy.features?.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'specs' && (
                    <div className="grid grid-cols-2 gap-2 text-stone-600">
                      <div><strong className="text-stone-800">Dimensions:</strong> {toy.dimensions}</div>
                      <div><strong className="text-stone-800">Weight:</strong> {toy.weight}</div>
                      <div><strong className="text-stone-800">Age:</strong> {toy.ageLabel}</div>
                      <div><strong className="text-stone-800">Provenance:</strong> {toy.origin}</div>
                    </div>
                  )}

                  {activeTab === 'safety' && (
                    <div className="space-y-1.5">
                      <p><strong className="text-stone-800">Certification:</strong> {toy.safety}</p>
                      <p><strong className="text-stone-800">Materials:</strong> {toy.material}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Gift Wrap Addon option */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl space-y-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-amber-950">
                  <input
                    type="checkbox"
                    checked={includeGiftWrap}
                    onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                    className="rounded text-amber-700 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                  />
                  <Gift className="w-4 h-4 text-amber-700 inline" />
                  <span>Complimentary Kraft Gift Wrapping & Calligraphy Card</span>
                </label>

                {includeGiftWrap && (
                  <textarea
                    rows={2}
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Write your greeting note here (e.g., Happy 4th Birthday Leo! Love, Aunt Maya)"
                    className="w-full text-xs p-2.5 rounded-lg border border-amber-300 bg-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                )}
              </div>
            </div>

            {/* Purchase Controls & Sticky CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-1.5 text-stone-600 hover:text-stone-900 disabled:opacity-30 rounded-lg hover:bg-stone-200/70 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-9 text-center font-mono font-bold text-sm text-stone-900 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(toy.stockCount, quantity + 1))}
                    disabled={quantity >= toy.stockCount}
                    className="p-1.5 text-stone-600 hover:text-stone-900 disabled:opacity-30 rounded-lg hover:bg-stone-200/70 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => onToggleWishlist(toy.id)}
                  className={`p-3 border rounded-xl transition-colors ${
                    isWishlisted 
                      ? 'border-red-300 bg-red-50 text-red-600' 
                      : 'border-stone-300 hover:bg-stone-50 text-stone-700'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600' : ''}`} />
                </button>

                {/* Primary Add To Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 font-semibold text-sm rounded-xl text-white bg-amber-700 hover:bg-amber-800 shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Play Bag!</span>
                    </>
                  ) : (
                    <>
                      <span>Add to Play Bag</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">
                        ${(toy.price * quantity).toFixed(2)}
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Delivery info guarantee */}
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-stone-400" />
                  Ships tomorrow in 100% paper packaging
                </span>
                <span className="flex items-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5 text-stone-400" />
                  30-day gentle returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
