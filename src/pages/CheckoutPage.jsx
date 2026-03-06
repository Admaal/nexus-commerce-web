import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navbar } from "../components/layout/Navbar";
import { Button } from "../components/ui/Button";
import { getProductImage } from "../lib/constants";

const checkoutSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  address: z.string().min(5, "La dirección es obligatoria y debe ser real"),
});

export function CheckoutPage({ cart, orders }) {
  const navigate = useNavigate();
  const [globalError, setGlobalError] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = async (data) => {
    setGlobalError(null);
    const { error } = await orders.createOrder(cart.items, data);

    if (error) {
      setGlobalError("Error al procesar el pedido. Inténtalo de nuevo.");
      return;
    }

    cart.clearCart();
    navigate("/", { state: { ordersOpen: true } });
  };

  if (cart.items.length === 0) {
    return (
      <div className="page">
        <Navbar itemCount={0} onCartOpen={() => {}} onOrdersOpen={() => {}} />
        <div className="container checkout-empty">
          <p className="checkout-empty__icon">🛒</p>
          <h2>Tu carrito está vacío</h2>
          <Button variant="primary" onClick={() => navigate("/")}>Volver a la tienda</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar itemCount={cart.itemCount} onCartOpen={() => navigate(-1)} onOrdersOpen={() => {}} />

      <main className="container checkout-layout">
        <section className="checkout-form-section">
          <h1 className="checkout-title">Finalizar compra</h1>
          <form className="checkout-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {globalError && <p className="form-error form-error--global">{globalError}</p>}

            <div className="form-group">
              <label className="form-label" htmlFor="name">Nombre completo</label>
              <input
                id="name"
                type="text"
                className={`form-input ${errors.name ? "form-input--error" : ""}`}
                placeholder="Ada Lovelace"
                autoComplete="name"
                {...register("name")}
              />
              {errors.name && <p className="form-error">{errors.name.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                className={`form-input ${errors.email ? "form-input--error" : ""}`}
                placeholder="ada@mail.com"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="address">Dirección de envío</label>
              <input
                id="address"
                type="text"
                className={`form-input ${errors.address ? "form-input--error" : ""}`}
                placeholder="Calle Mayor 1, 28001 Madrid"
                autoComplete="street-address"
                {...register("address")}
              />
              {errors.address && <p className="form-error">{errors.address.message}</p>}
            </div>

            <div className="checkout__privacy-wrap">
              <p className="checkout__privacy-notice">
                ℹ️ <strong>Privacidad:</strong> Al usar este portfolio, aceptas que los datos introducidos (nombre, email, dirección) 
                se guarden temporalmente en una base de datos pública de prueba. <strong>Usa datos ficticios.</strong>
              </p>
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="btn--full checkout-submit"
            >
              {isSubmitting ? "Procesando..." : "Confirmar Pedido →"}
            </Button>
          </form>
        </section>

        <aside className="checkout-summary">
          <h2 className="checkout-summary__title">Resumen del pedido</h2>
          <div className="checkout-items">
            {cart.items.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={getProductImage(item.name)} alt={item.name} className="checkout-item__img" />
                <div className="checkout-item__info">
                  <p className="checkout-item__name">{item.name}</p>
                  <p className="checkout-item__meta">× {item.quantity}</p>
                </div>
                <span className="checkout-item__price">{(item.price * item.quantity).toFixed(2)}€</span>
              </div>
            ))}
          </div>
          <div className="checkout-summary__total">
            <span>Total</span>
            <span className="checkout-summary__total-amount">{cart.total.toFixed(2)}€</span>
          </div>
        </aside>
      </main>
    </div>
  );
}
