import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Gift, Truck, Tag, Check } from 'lucide-react';
import ToyVisual from './ToyVisual';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // decimal 0.10 etc
  const [promoMessage, setPromoMessage] = useState(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const shippingThreshold = 50.00;
  const isFreeShipping = subtotal >= shippingThreshold;
  const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotal);
  const shippingCost = items.length === 0 || isFreeShipping ? 0 : 6.50;
  const total = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'PLAY10') {
      setAppliedDiscount(0.10);
      setPromoMessage({ type: 'success', text: '10% Family Discount Applied!' });
    } else if (promoCode.trim().toUpperCase() === 'WOODEN') {
      setAppliedDiscount(0.15);
      setPromoMessage({ type: 'success', text: '15% Artisan Discount Applied!' });
    } else {
      setPromoMessage({ type: 'error', text: 'Invalid code. Try "PLAY10" for 10% off' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-800" />
              <h2 className="font-display text-lg font-bold text-stone-900">
                Playthings Bag
              </h2>
              <span className="font-mono text-xs font-semibold text-stone-500 bg-stone-200/80 px-2 py-0.5 rounded-full tabular-nums">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-amber-50/60 border-b border-amber-100 text-xs text-amber-950">
            <div className="flex items-center justify-between mb-1">
              <span className="flex items-center gap-1 font-medium">
                <Truck className="w-3.5 h-3.5 text-amber-700" />
                {isFreeShipping ? (
                  <strong className="text-emerald-800">You unlocked Free Carbon-Neutral Shipping!</strong>
                ) : (
                  <span>
                    Add <strong className="font-mono tabular-nums">${remainingForFreeShipping.toFixed(2)}</strong> more for free shipping
                  </span>
                )}
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-amber-200/70 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-700 transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-3xl">
                  🧸
                </div>
                <h3 className="font-display text-base font-bold text-stone-800">
                  Your play bag is empty
                </h3>
                <p className="text-xs text-stone-500 max-w-xs">
                  Discover heirloom wooden trains, Waldorf arches, and curious STEM discoveries.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors"
                >
                  Explore Playthings
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 first:pt-0 last:pb-0 group">
                  {/* Thumbnail */}
                  <div 
                    className="w-18 h-18 rounded-xl flex items-center justify-center p-1.5 shrink-0"
                    style={{ backgroundColor: item.bgColor || '#FAF8F5' }}
                  >
                    <ToyVisual type={item.visualType} name={item.name} className="w-full h-full" />
                  </div>

                  {/* Info & Quantity */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-display text-sm font-semibold text-stone-900 truncate pr-2">
                          {item.name}
                        </h4>
                        <span className="font-mono text-sm font-bold text-stone-900 tabular-nums">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-500 capitalize">
                        {item.category} · {item.ageLabel}
                      </div>

                      {item.giftWrap && (
                        <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-800">
                          <Gift className="w-3 h-3" />
                          <span>Includes gift wrap & note</span>
                        </div>
                      )}
                    </div>

                    {/* Stepper & Trash */}
                    <div className="flex items-center justify-between mt-2 pt-1">
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-stone-500 hover:text-stone-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-mono text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-stone-500 hover:text-stone-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50/80 space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder='Promo code (try "PLAY10")'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full pl-8 pr-2 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600 uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-medium bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <div className={`text-xs flex items-center gap-1 ${promoMessage.type === 'success' ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {promoMessage.type === 'success' && <Check className="w-3 h-3" />}
                  <span>{promoMessage.text}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Artisan Discount ({appliedDiscount * 100}%)</span>
                    <span className="font-mono tabular-nums">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Carbon-Neutral Delivery</span>
                  <span className="font-mono tabular-nums">
                    {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-900">
                  <span>Estimated Total</span>
                  <span className="font-mono tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout({
                    subtotal,
                    discount: discountAmount,
                    shipping: shippingCost,
                    total,
                    items
                  });
                }}
                className="w-full py-3.5 px-4 font-semibold text-sm rounded-xl text-white bg-amber-700 hover:bg-amber-800 shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-center text-stone-400">
                Zero plastic packaging · Hand-inspected in our workshop
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
