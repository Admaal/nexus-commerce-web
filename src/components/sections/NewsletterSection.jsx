import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <section className="section section--alt">
      <div className="container newsletter">
        <div className="section__header">
          <p className="section__eyebrow">Newsletter</p>
          <h2 className="section__title">Sé el primero en saber</h2>
        </div>
        {submitted ? (
          <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>
            ¡Gracias! Te mantendremos informado.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter__input"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter__btn">
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
