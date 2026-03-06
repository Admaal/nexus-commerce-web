import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { Button } from "../ui/Button";

export function CartDrawer({ isOpen, onClose, items, total, onRemove, onUpdateQuantity }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose} />}
      <aside className={`drawer drawer--right ${isOpen ? "drawer--open" : ""}`}>
        <div className="drawer__header">
          <h2 className="drawer__title">Tu Carrito</h2>
          <button className="drawer__close" onClick={onClose} aria-label="Cerrar">×</button>
        </div>

        <div className="drawer__body">
          {items.length === 0 ? (
            <div className="drawer__empty">
              <p className="drawer__empty-icon">🛒</p>
              <p>Tu carrito está vacío</p>
              <Button variant="ghost" onClick={onClose}>Seguir comprando</Button>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer__footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="cart-total__amount">{total.toFixed(2)}€</span>
            </div>
            <Button variant="primary" onClick={handleCheckout} className="btn--full">
              Proceder al pago →
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
