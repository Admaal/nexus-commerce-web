import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { ReviewsSection } from "../components/sections/ReviewsSection";
import { NewsletterSection } from "../components/sections/NewsletterSection";
import { ProductGrid } from "../components/products/ProductGrid";
import { CartDrawer } from "../components/cart/CartDrawer";
import { OrdersDrawer } from "../components/orders/OrdersDrawer";
import { useProducts } from "../hooks/useProducts";

export function StorePage({ cart, orders }) {
  const { products, loading } = useProducts();
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(() => !!location.state?.ordersOpen);

  const scrollToProducts = () => {
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <Navbar
        itemCount={cart.itemCount}
        onCartOpen={() => setCartOpen(true)}
        onOrdersOpen={() => setOrdersOpen(true)}
      />

      <HeroSection onShopClick={scrollToProducts} />

      <section className="section" id="productos">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">Colección</p>
            <h2 className="section__title">Productos destacados</h2>
          </div>
          <ProductGrid products={products} loading={loading} onAddToCart={cart.addItem} />
        </div>
      </section>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="reviews">
        <ReviewsSection />
      </div>

      <NewsletterSection />
      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart.items}
        total={cart.total}
        onRemove={cart.removeItem}
        onUpdateQuantity={cart.updateQuantity}
      />
      <OrdersDrawer
        isOpen={ordersOpen}
        onClose={() => setOrdersOpen(false)}
        orders={orders.orders}
      />
    </div>
  );
}
