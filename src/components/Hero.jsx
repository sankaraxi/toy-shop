import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Trees } from 'lucide-react';
import ToyVisual from './ToyVisual';

export default function Hero({ onExploreCatalog, onOpenGiftFinder }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F0E8] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200/60 pt-8 pb-14 lg:py-16">
      {/* Subtle organic background warmth */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-stone-200/40 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <span>Boutique Toymaker</span>
              <span aria-hidden="true">·</span>
              <span>100% Screen-Free Wonder</span>
              <span aria-hidden="true">·</span>
              <span>FSC Certified Wood</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1] text-balance">
              Playthings crafted to spark wonder, not overstimulation.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Heirloom wooden trains, Montessori balance arches, curious scientific telescopes, and pure organic companions. Hand-sanded European timber finished with safe vegetable dyes.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-98 cursor-pointer"
              >
                <span>Explore the Playthings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGiftFinder}
                className="px-5 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Gift Matcher Wizard</span>
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-stone-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs font-medium">EN71 & ASTM Lab Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Trees className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-xs font-medium">Sustainable Forest Beech</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-stone-700 shrink-0" />
                <span className="text-xs font-medium">Generations Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Showcase Showcase Box */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xl shadow-stone-200/40 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs font-semibold text-stone-400">
                  FEATURED HEIRLOOM
                </div>

                {/* Big Showcase Graphic */}
                <div className="h-56 sm:h-64 bg-[#FEF3C7]/40 rounded-2xl p-4 flex items-center justify-center">
                  <ToyVisual type="train" name="Nordic Express" isHero={true} className="w-full h-full transform hover:scale-105 transition-transform" />
                </div>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-stone-900">
                      Nordic Express Beechwood Train
                    </h3>
                    <span className="font-mono text-lg font-bold text-stone-900 tabular-nums">
                      $48.00
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Solid beechwood locomotive with 3 magnetic freight cars, turned brass rivets, and smooth beeswax polish.
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs text-stone-500">
                    <span>Ages 3+ Years</span>
                    <span aria-hidden="true">·</span>
                    <span>18 in stock</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-800 font-medium">Free gift wrap</span>
                  </div>
                </div>
              </div>

              {/* Floating secondary badge badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-stone-900 text-white py-2.5 px-4 rounded-xl shadow-lg items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-xs font-medium">
                  <span className="font-bold">Next-Day Dispatch</span> · Carbon neutral
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
