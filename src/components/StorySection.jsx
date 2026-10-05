import React from 'react';
import { Trees, ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';
import { TESTIMONIALS, STORE_FEATURES } from '../data/toys';

export default function StorySection({ onOpenGiftFinder }) {
  return (
    <section id="craftsmanship" className="py-16 sm:py-20 bg-[#F5F2EC] border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>Our Workshop Standard</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2018</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Why we carve wood instead of molding cheap plastic.
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Every WonderKind toy is designed for quiet, deep immersion. When a toy does less on its own—no screeching electronic sirens or flashing screens—the child’s own imagination does infinitely more.
          </p>
        </div>

        {/* 4 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_FEATURES.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="text-amber-800 font-mono text-sm font-bold mb-3">
                0{idx + 1}.
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-2">
                {feat.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Adjacency Claim-to-Proof: Pediatric & Parent Testimonials */}
        <div id="reviews" className="mt-16 pt-12 border-t border-stone-300/70">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                Endorsed by Specialists
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 mt-1">
                Words from childhood educators & families
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Certified Child Safe · Over 4,200 Playrooms Equipped</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
              >
                <blockquote className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{t.comment}"
                </blockquote>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-stone-900">{t.name}</div>
                    <div className="text-[11px] text-stone-500">{t.role}</div>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
