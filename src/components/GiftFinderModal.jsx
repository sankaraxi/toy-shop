import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RefreshCcw, ShoppingBag } from 'lucide-react';
import { TOYS, AGE_GROUPS, PLAY_STYLES } from '../data/toys';
import ToyVisual from './ToyVisual';

export default function GiftFinderModal({ isOpen, onClose, onAddToCart, onQuickView }) {
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedPlayStyle, setSelectedPlayStyle] = useState('all');
  const [maxBudget, setMaxBudget] = useState(100);
  const [isCalculated, setIsCalculated] = useState(false);

  if (!isOpen) return null;

  // Filter toys matching the gift criteria
  const recommendedToys = TOYS.filter((toy) => {
    const matchesAge = selectedAge === 'all' || toy.ageRange === selectedAge;
    const matchesStyle = selectedPlayStyle === 'all' || toy.playStyle === selectedPlayStyle;
    const matchesBudget = toy.price <= maxBudget;
    return matchesAge && matchesStyle && matchesBudget;
  }).slice(0, 4);

  const handleReset = () => {
    setSelectedAge('all');
    setSelectedPlayStyle('all');
    setMaxBudget(100);
    setIsCalculated(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-stone-200 shadow-2xl p-6 sm:p-8 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="max-w-md">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Play Concierge</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
            Toy Gift Matcher
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Answer 3 quick preferences to uncover the most thoughtful, developmentally attuned toy.
          </p>
        </div>

        {/* Step-by-Step Questions */}
        {!isCalculated ? (
          <div className="mt-6 space-y-6">
            {/* Step 1: Age */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                1. Recipient's Age Stage
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {AGE_GROUPS.map((ag) => (
                  <button
                    key={ag.id}
                    onClick={() => setSelectedAge(ag.id)}
                    className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                      selectedAge === ag.id
                        ? 'border-amber-700 bg-amber-50/80 text-amber-950 font-semibold ring-1 ring-amber-700'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    {ag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Play Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                2. Favorite Play Personality
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {PLAY_STYLES.map((ps) => (
                  <button
                    key={ps.id}
                    onClick={() => setSelectedPlayStyle(ps.id)}
                    className={`p-3 text-left rounded-xl border text-xs transition-all ${
                      selectedPlayStyle === ps.id
                        ? 'border-amber-700 bg-amber-50/80 text-amber-950 ring-1 ring-amber-700'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    <div className="font-semibold">{ps.label}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{ps.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  3. Maximum Budget
                </label>
                <span className="font-mono text-sm font-bold text-amber-900 tabular-nums">
                  Up to ${maxBudget}
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="100"
                step="5"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-700"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>$25</span>
                <span>$50</span>
                <span>$75</span>
                <span>$100+</span>
              </div>
            </div>

            {/* Reveal Matches Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsCalculated(true)}
                className="px-6 py-3 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Find Matched Playthings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-xs text-stone-500">
                Found <strong className="text-stone-900 font-mono tabular-nums">{recommendedToys.length}</strong> heirloom playthings tailored to your preferences:
              </div>
              <button
                onClick={handleReset}
                className="text-xs text-amber-800 hover:underline flex items-center gap-1"
              >
                <RefreshCcw className="w-3 h-3" />
                <span>Adjust Answers</span>
              </button>
            </div>

            {recommendedToys.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedToys.map((toy) => (
                  <div
                    key={toy.id}
                    className="p-3.5 rounded-2xl border border-stone-200/90 bg-stone-50/60 hover:bg-white transition-all flex gap-4 items-center group"
                  >
                    <div 
                      className="w-20 h-20 rounded-xl flex items-center justify-center p-2 shrink-0 cursor-pointer"
                      style={{ backgroundColor: toy.bgColor || '#FAF8F5' }}
                      onClick={() => {
                        onClose();
                        onQuickView(toy);
                      }}
                    >
                      <ToyVisual type={toy.visualType} name={toy.name} className="w-full h-full group-hover:scale-105 transition-transform" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-stone-400 capitalize">{toy.ageLabel} · {toy.category}</div>
                      <h4 
                        onClick={() => {
                          onClose();
                          onQuickView(toy);
                        }}
                        className="font-display text-sm font-bold text-stone-900 truncate hover:text-amber-800 cursor-pointer"
                      >
                        {toy.name}
                      </h4>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-stone-900 tabular-nums">
                          ${toy.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => {
                            onAddToCart(toy);
                          }}
                          className="px-2.5 py-1 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <p className="text-sm text-stone-600 font-medium">No toys matched that exact filter combination.</p>
                <button
                  onClick={handleReset}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors"
                >
                  Reset Preferences
                </button>
              </div>
            )}

            <div className="pt-2 flex justify-between items-center text-xs text-stone-500 border-t border-stone-200">
              <span>All selections eligible for free gift wrapping & custom cards</span>
              <button
                onClick={onClose}
                className="font-medium text-stone-800 hover:text-amber-800"
              >
                Close & Browse All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
