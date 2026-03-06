import { getProductImage } from "../../lib/constants";

export function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={getProductImage(product.name)}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{product.price}€</span>
          <button
            className="product-card__add-btn"
            onClick={() => onAddToCart(product)}
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
