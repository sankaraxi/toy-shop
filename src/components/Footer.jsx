import React, { useState } from 'react';
import { ArrowRight, Check, Heart } from 'lucide-react';

export default function Footer({ onCategoryClick, onOpenGiftFinder }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-2xl font-bold text-white tracking-tight">
              WonderKind Toys
            </span>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Dedicated to slow, wholesome play. Carved from renewable certified European beech and finished with non-toxic natural plant dyes for mindful childhood development.
            </p>
            <div className="text-xs text-stone-400 space-y-1 pt-1">
              <div>Artisan Workshop: 48 Craftsman Lane, Boulder, CO 80302</div>
              <div>Customer Care: hello@wonderkindtoys.com · Mon–Fri 9am–5pm MST</div>
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Play Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onCategoryClick('wooden')} className="hover:text-white transition-colors">
                  Wooden Classics
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('stem')} className="hover:text-white transition-colors">
                  STEM & Scientific Exploration
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('plush')} className="hover:text-white transition-colors">
                  Organic Plush & Bedtime
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('creative')} className="hover:text-white transition-colors">
                  Botanical Arts & Puppetry
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('puzzles')} className="hover:text-white transition-colors">
                  Tangrams & Mind Puzzles
                </button>
              </li>
            </ul>
          </div>

          {/* Guidance & Values */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Parent Guidance
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={onOpenGiftFinder} className="hover:text-white transition-colors">
                  Toy Gift Matcher
                </button>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-white transition-colors">
                  Wood Provenance & EN71 Standards
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Therapist Reviews
                </a>
              </li>
              <li>
                <span className="text-stone-500">Free Gift Wrapping Guidelines</span>
              </li>
              <li>
                <span className="text-stone-500">Care & Beeswax Polishing</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              The Playroom Chronicle
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe for gentle parenting play ideas and receive <strong className="text-white">10% off</strong> your first order.
            </p>

            {subscribed ? (
              <div className="p-3 bg-stone-800 rounded-xl text-xs text-emerald-400 flex items-center gap-1.5 border border-emerald-900/50">
                <Check className="w-4 h-4 shrink-0" />
                <span>Welcome! Use code <strong>PLAY10</strong> at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Subscribe for 10% Off</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} WonderKind Toys Co. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Safety Certificates</span>
            <span>Carbon Neutral Packaging</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
