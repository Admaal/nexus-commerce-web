import { ProductCard } from "./ProductCard";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton--image" />
      <div className="skeleton-card__body">
        <div className="skeleton skeleton--title" />
        <div className="skeleton skeleton--text" />
        <div className="skeleton skeleton--short" />
      </div>
    </div>
  );
}

export function ProductGrid({ products, loading, onAddToCart }) {
  if (loading) {
    return (
      <div className="product-grid">
        {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <p className="product-grid__empty">
        No hay productos disponibles en este momento.
      </p>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
