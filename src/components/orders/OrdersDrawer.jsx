import { OrderCard } from "./OrderCard";

export function OrdersDrawer({ isOpen, onClose, orders }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose} />}
      <aside className={`drawer drawer--right ${isOpen ? "drawer--open" : ""}`}>
        <div className="drawer__header">
          <h2 className="drawer__title">Mis Pedidos</h2>
          <button className="drawer__close" onClick={onClose} aria-label="Cerrar">×</button>
        </div>

        <div className="drawer__body">
          {orders.length === 0 ? (
            <div className="drawer__empty">
              <p className="drawer__empty-icon">📦</p>
              <p>No tienes pedidos todavía</p>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
