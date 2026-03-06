import { Link } from "react-router-dom";

export function Navbar({ itemCount, onCartOpen, onOrdersOpen }) {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>NEXUS</Link>

        <ul className="navbar__nav">
          <li><a href="/#productos" className="navbar__nav-link">Catálogo</a></li>
          <li><a href="/#features" className="navbar__nav-link">Características</a></li>
          <li><a href="/#reviews" className="navbar__nav-link">Reseñas</a></li>
        </ul>

        <div className="navbar__actions">
          <button className="navbar__orders-btn" onClick={onOrdersOpen} aria-label="Mis Pedidos">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button className="navbar__cart-btn" onClick={onCartOpen} aria-label="Carrito">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {itemCount > 0 && <span className="cart-badge" key={itemCount}>{itemCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
