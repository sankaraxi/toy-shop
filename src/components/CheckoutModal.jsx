import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Banknote, Gift, Printer, ArrowRight } from 'lucide-react';
import ToyVisual from './ToyVisual';

export default function CheckoutModal({ isOpen, onClose, cartDetails, onOrderSuccess }) {
  const [step, setStep] = useState(1); // 1: Shipping & Info, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card', // 'card' or 'cod'
    cardNumber: '',
    expiry: '',
    cvv: '',
    giftNotePrompt: ''
  });
  const [orderReceipt, setOrderReceipt] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !cartDetails) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.street || !formData.city) {
      alert('Please fill out all required shipping details.');
      return;
    }
    setStep(2);
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const orderNumber = `WK-${Math.floor(100000 + Math.random() * 900000)}`;
      const receipt = {
        orderNumber,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        items: cartDetails.items,
        total: cartDetails.total,
        shipping: cartDetails.shipping,
        discount: cartDetails.discount,
        customer: formData,
        estDelivery: 'Within 2-3 business days via Carbon-Neutral Courier'
      };
      setOrderReceipt(receipt);
      setIsSubmitting(false);
      setStep(3);
      onOrderSuccess();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-stone-200 shadow-2xl p-6 sm:p-8 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div>
            <h2 className="font-display text-xl font-bold text-stone-900">
              {step === 3 ? 'Order Receipt & Confirmation' : 'Checkout & Dispatch'}
            </h2>
            <p className="text-xs text-stone-500">
              {step === 1 && 'Step 1 of 2: Shipping & Delivery Contact'}
              {step === 2 && 'Step 2 of 2: Secure Payment & Verification'}
              {step === 3 && 'Thank you for supporting mindful childhood play!'}
            </p>
          </div>
          {step !== 3 && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step 1: Shipping Details */}
        {step === 1 && (
          <form onSubmit={handleProceedToPayment} className="mt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Parent / Guardian Full Name *
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Eleanor Vance"
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:ring-1 focus:ring-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address for Receipt & Tracking *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eleanor@example.com"
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:ring-1 focus:ring-amber-600 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Street Address & Apartment / Unit *
                </label>
                <input
                  required
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="742 Evergreen Terrace, Apt 4"
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:ring-1 focus:ring-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  City *
                </label>
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Boulder"
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:ring-1 focus:ring-amber-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    State / Region *
                  </label>
                  <input
                    required
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="CO"
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Postal Code *
                  </label>
                  <input
                    required
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="80301"
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Mobile Phone (For courier delivery SMS)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 019-2834"
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-200 focus:ring-1 focus:ring-amber-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Total recap bar */}
            <div className="p-3 bg-stone-50 rounded-xl flex items-center justify-between text-xs">
              <span className="text-stone-600">Total Playthings Amount:</span>
              <span className="font-mono text-base font-bold text-stone-900 tabular-nums">
                ${cartDetails.total.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                Back to Bag
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Payment Method */}
        {step === 2 && (
          <form onSubmit={handleCompleteOrder} className="mt-5 space-y-4">
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Select Payment Preference
              </label>

              {/* Payment selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'border-amber-700 bg-amber-50/70 ring-1 ring-amber-700'
                      : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-amber-800" />
                  <div>
                    <div className="text-xs font-bold text-stone-900">Card / Digital Pay</div>
                    <div className="text-[11px] text-stone-500">Encrypted 256-bit SSL</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'border-amber-700 bg-amber-50/70 ring-1 ring-amber-700'
                      : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-emerald-800" />
                  <div>
                    <div className="text-xs font-bold text-stone-900">Cash on Delivery (COD)</div>
                    <div className="text-[11px] text-stone-500">Pay courier at your door</div>
                  </div>
                </button>
              </div>

              {formData.paymentMethod === 'card' ? (
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="•••• •••• •••• 4242"
                      className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        Expiry MM/YY
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="08/28"
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        Security Code (CVV)
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="•••"
                        maxLength="4"
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-white font-mono"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Cash on Delivery Confirmed</span>
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    Prepare exact change (${cartDetails.total.toFixed(2)}) for the courier upon parcel arrival. An SMS notification will be sent prior to morning delivery.
                  </p>
                </div>
              )}

              {/* Order total recap */}
              <div className="border-t border-stone-200 pt-3 space-y-1 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Ship To:</span>
                  <span className="font-medium text-stone-900">{formData.fullName} ({formData.city})</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-stone-900 pt-1">
                  <span>Final Amount Charged:</span>
                  <span className="font-mono tabular-nums">${cartDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-stone-600 hover:text-stone-900"
              >
                ← Edit Address
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Confirm & Place Order</span>
                    <span className="font-mono tabular-nums">(${cartDetails.total.toFixed(2)})</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Order Receipt & Success Confirmation */}
        {step === 3 && orderReceipt && (
          <div className="mt-5 space-y-5">
            <div className="text-center py-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-display text-xl font-bold text-stone-900">
                Order Confirmed — Preparing Workshop Shipment!
              </h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Your heirloom toys are being carefully wrapped with recycled paper and checked by our woodworkers.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs">
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <div>
                  <span className="text-stone-400">Order Reference:</span>
                  <div className="font-mono font-bold text-stone-900 text-sm">{orderReceipt.orderNumber}</div>
                </div>
                <div className="text-right">
                  <span className="text-stone-400">Date:</span>
                  <div className="font-medium text-stone-900">{orderReceipt.date}</div>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2 divide-y divide-stone-100">
                {orderReceipt.items.map((item) => (
                  <div key={item.id} className="pt-2 flex justify-between items-center text-xs">
                    <div>
                      <span className="font-medium text-stone-800">{item.name}</span>
                      <span className="text-stone-400 ml-1.5 font-mono">×{item.quantity}</span>
                      {item.giftWrap && (
                        <div className="text-[11px] text-amber-700 flex items-center gap-1">
                          <Gift className="w-3 h-3" />
                          <span>Includes gift wrap & handwritten greeting</span>
                        </div>
                      )}
                    </div>
                    <span className="font-mono font-bold text-stone-900 tabular-nums">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="pt-2 border-t border-stone-200 space-y-1">
                <div className="flex justify-between text-stone-500">
                  <span>Delivery Method:</span>
                  <span className="text-stone-800">{orderReceipt.estDelivery}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Delivery Address:</span>
                  <span className="text-stone-800">{orderReceipt.customer.street}, {orderReceipt.customer.city}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total Paid / Due on Delivery:</span>
                  <span className="font-mono tabular-nums">${orderReceipt.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 px-4 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Receipt</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                <span>Continue Exploring Playthings</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
