const REVIEWS = [
  {
    text: "La calidad del teclado mecánico es increíble. Llevo tres meses usándolo a diario y la experiencia de escritura es superior a cualquier otro que haya probado.",
    author: "Carlos M.",
    role: "Desarrollador Senior",
    stars: 5,
  },
  {
    text: "El proceso de compra fue impecable. Hice el pedido y en menos de un minuto tenía la factura en mi correo. El envío llegó al día siguiente.",
    author: "Laura G.",
    role: "Diseñadora UX",
    stars: 5,
  },
  {
    text: "Buscaba un monitor para trabajo en diseño y este supera mis expectativas. Los colores son precisos y el contraste es perfecto para sesiones largas.",
    author: "Miguel R.",
    role: "Director Creativo",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="review-card__stars" aria-label={`${count} de 5 estrellas`}>
      {"★".repeat(count)}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Reseñas</p>
          <h2 className="section__title">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r) => (
            <div key={r.author} className="review-card">
              <Stars count={r.stars} />
              <p className="review-card__text">"{r.text}"</p>
              <p className="review-card__author">{r.author} · {r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
