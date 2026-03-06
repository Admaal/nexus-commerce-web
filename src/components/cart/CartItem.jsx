import { getProductImage } from "../../lib/constants";

export function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <img
        src={getProductImage(item.name)}
        alt={item.name}
        className="cart-item__image"
      />
      <div className="cart-item__info">
        <p className="cart-item__name">{item.name}</p>
        <p className="cart-item__price">{(item.price * item.quantity).toFixed(2)}€</p>
        <div className="cart-item__qty">
          <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>−</button>
          <span className="qty-value">{item.quantity}</span>
          <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
      </div>
      <button className="cart-item__remove" onClick={() => onRemove(item.id)} aria-label="Eliminar">
        ×
      </button>
    </div>
  );
}
