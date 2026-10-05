import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import GiftFinderModal from './components/GiftFinderModal';
import CheckoutModal from './components/CheckoutModal';
import StorySection from './components/StorySection';
import Footer from './components/Footer';
import { TOYS, TOY_CATEGORIES, AGE_GROUPS } from './data/toys';
import { SlidersHorizontal, CheckCircle, Search, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation & Filter States
  const [activeSection, setActiveSection] = useState('catalog');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'rating'
  const [searchQuery, setSearchQuery] = useState('');

  // Cart & Wishlist States (persisted via localStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('wk_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('wk_wishlist');
      return saved ? JSON.parse(saved) : ['toy-1', 'toy-4'];
    } catch {
      return ['toy-1', 'toy-4'];
    }
  });

  // Modal Dialog States
  const [selectedToyForModal, setSelectedToyForModal] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isGiftFinderOpen, setIsGiftFinderOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wk_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('wk_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Toast notification helper
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart Actions
  const handleAddToCart = (toyToAdd) => {
    const qty = toyToAdd.quantity || 1;
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === toyToAdd.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === toyToAdd.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevItems, { ...toyToAdd, quantity: qty }];
    });
    showToast(`Added ${toyToAdd.name} to play bag`);
  };

  const handleUpdateCartQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist Actions
  const handleToggleWishlist = (toyId) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(toyId);
      const updated = exists ? prev.filter((id) => id !== toyId) : [...prev, toyId];
      const toy = TOYS.find((t) => t.id === toyId);
      showToast(exists ? `Removed from wishlist` : `Added ${toy?.name || 'toy'} to wishlist`);
      return updated;
    });
  };

  const handleMoveWishlistToCart = (toy) => {
    handleAddToCart(toy);
    setWishlistIds((prev) => prev.filter((id) => id !== toy.id));
  };

  // Navigation handlers
  const handleNavigate = (section) => {
    setActiveSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'catalog') {
      const el = document.getElementById('catalog');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'craftsmanship') {
      const el = document.getElementById('craftsmanship');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'reviews') {
      const el = document.getElementById('reviews');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter and Sort Logic
  const filteredToys = useMemo(() => {
    return TOYS.filter((toy) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || toy.category === selectedCategory;

      // Age filter
      const matchesAge =
        selectedAge === 'all' || toy.ageRange === selectedAge;

      // Search Query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        toy.name.toLowerCase().includes(query) ||
        toy.shortDescription.toLowerCase().includes(query) ||
        toy.category.toLowerCase().includes(query) ||
        toy.material.toLowerCase().includes(query);

      return matchesCategory && matchesAge && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured order as in data array
    });
  }, [selectedCategory, selectedAge, searchQuery, sortBy]);

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce-subtle">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header with Top Bar Contract */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenGiftFinder={() => setIsGiftFinderOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        onExploreCatalog={() => handleNavigate('catalog')}
        onOpenGiftFinder={() => setIsGiftFinderOpen(true)}
      />

      {/* Main Catalog View */}
      <main id="catalog" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              <span>Heirloom Play Collection</span>
              <span aria-hidden="true">·</span>
              <span>Screen-Free Discovery</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Curated Playthings for Growing Minds
            </h2>
          </div>

          {/* Interactive Gift Matcher shortcut banner */}
          <button
            onClick={() => setIsGiftFinderOpen(true)}
            className="self-start md:self-auto px-4 py-2 text-xs font-semibold text-amber-900 bg-amber-100/80 hover:bg-amber-200/90 rounded-xl flex items-center gap-2 transition-colors cursor-pointer border border-amber-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Not sure what to choose? Use the Gift Matcher</span>
          </button>
        </div>

        {/* Filter & Sort Controls (Interactive Filter controls with single-line labels) */}
        <div className="py-6 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {TOY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100/80 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Filter Bar: Age Group, Sorting, and Active Count */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            {/* Age Filter Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-stone-500">Age:</span>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="text-xs bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 font-medium text-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-600 cursor-pointer"
              >
                {AGE_GROUPS.map((ag) => (
                  <option key={ag.id} value={ag.id}>
                    {ag.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown & Counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-500 font-mono tabular-nums">
                Showing {filteredToys.length} of {TOYS.length} playthings
              </span>

              <div className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 font-medium text-stone-700 focus:outline-none focus:ring-1 focus:ring-amber-600 cursor-pointer"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid (3-column desktop baseline adhering to e-commerce guidelines) */}
        {filteredToys.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {filteredToys.map((toy) => (
              <ProductCard
                key={toy.id}
                toy={toy}
                isWishlisted={wishlistIds.includes(toy.id)}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
                onQuickView={(t) => setSelectedToyForModal(t)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search or Filter State */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300 max-w-md mx-auto my-8 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-3xl mx-auto">
              🔍
            </div>
            <h3 className="font-display text-lg font-bold text-stone-900">
              No playthings match your search
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              We couldn't find any toys matching "{searchQuery}" under the selected age and category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedAge('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      {/* Craftsmanship & Testimonials Story Section */}
      <StorySection onOpenGiftFinder={() => setIsGiftFinderOpen(true)} />

      {/* Footer */}
      <Footer
        onCategoryClick={(catId) => {
          setSelectedCategory(catId);
          handleNavigate('catalog');
        }}
        onOpenGiftFinder={() => setIsGiftFinderOpen(true)}
      />

      {/* Product Detail Modal (PDP) */}
      {selectedToyForModal && (
        <ProductDetailModal
          toy={selectedToyForModal}
          onClose={() => setSelectedToyForModal(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlistIds.includes(selectedToyForModal.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={(details) => setCheckoutData(details)}
      />

      {/* Wishlist Slide-over Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        allToys={TOYS}
        onRemoveWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveWishlistToCart}
      />

      {/* Gift Matcher Wizard Modal */}
      <GiftFinderModal
        isOpen={isGiftFinderOpen}
        onClose={() => setIsGiftFinderOpen(false)}
        onAddToCart={handleAddToCart}
        onQuickView={(toy) => setSelectedToyForModal(toy)}
      />

      {/* Multi-Step Checkout Modal */}
      {checkoutData && (
        <CheckoutModal
          isOpen={!!checkoutData}
          onClose={() => setCheckoutData(null)}
          cartDetails={checkoutData}
          onOrderSuccess={() => {
            setCartItems([]);
          }}
        />
      )}
    </div>
  );
}
