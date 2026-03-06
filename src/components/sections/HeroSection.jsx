export function HeroSection({ onShopClick }) {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1600&q=85"
        alt="Premium workspace setup"
        className="hero__image"
      />
      <div className="hero__overlay">
        <div className="hero__content">
          <p className="hero__eyebrow">Nueva Colección 2025</p>
          <h1 className="hero__title">Diseñado para crear.</h1>
          <p className="hero__subtitle">
            Equipamiento premium para profesionales que valoran la calidad, el diseño y el rendimiento.
          </p>
          <button className="hero__cta" onClick={onShopClick}>
            Explorar la colección
          </button>
        </div>
      </div>
    </section>
  );
}
