import { Badge } from "../ui/Badge";

export function OrderCard({ order }) {
  const isCompleted = order.status === "COMPLETED";
  const ref = order.id?.split("-")[0].toUpperCase();

  return (
    <div className="order-card">
      <div className="order-card__header">
        <strong className="order-card__name">
          {order.items?.length > 0 
            ? `${order.items[0].name}${order.items.length > 1 ? ` y ${order.items.length - 1} más` : ""}` 
            : "Pedido Web"}
        </strong>
        <Badge status={order.status} />
      </div>
      <div className="order-card__meta-group">
        <p className="order-card__ref">Ref: {ref}</p>
        <p className="order-card__ref order-card__total">
          {order.total ? `${order.total.toFixed(2)}€` : ""}
        </p>
      </div>
      
      <div className="order-card__actions-wrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
        <div className="order-card__action">
          {isCompleted && order.invoice_url ? (
            <a
              href={order.invoice_url}
              target="_blank"
              rel="noreferrer"
              className="order-card__invoice-link"
            >
              📄 Descargar Factura PDF
            </a>
          ) : (
            !isCompleted && (
              <span className="order-card__processing">Generando factura en el Edge...</span>
            )
          )}
        </div>
        <a
          href={`https://panel-flota.vercel.app/?tracking_id=${order.id}`}
          target="_blank"
          rel="noreferrer"
          className="order-card__track-link"
          style={{ fontWeight: "600", color: "#3b82f6", textDecoration: "none" }}
        >
          🚚 Rastrear Envío
        </a>
      </div>
    </div>
  );
}