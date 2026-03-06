export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__brand-name">NEXUS</p>
            <p className="footer__brand-desc">
              Equipamiento premium para profesionales. Facturación instantánea, envío rápido, calidad sin compromisos.
            </p>
          </div>
          <div>
            <h4 className="footer__col-title">Tienda</h4>
            <ul className="footer__links">
              <li><a href="/#productos" className="footer__link">Catálogo</a></li>
              <li><a href="/#features" className="footer__link">Características</a></li>
              <li><a href="/#reviews" className="footer__link">Reseñas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">Soporte</h4>
            <ul className="footer__links">
              <li><span className="footer__link">Centro de ayuda</span></li>
              <li><span className="footer__link">Envíos y devoluciones</span></li>
              <li><span className="footer__link">Contacto</span></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">Legal</h4>
            <ul className="footer__links">
              <li><span className="footer__link">Privacidad</span></li>
              <li><span className="footer__link">Términos</span></li>
              <li><span className="footer__link">Cookies</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__disclaimer-wrap">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Nexus Commerce. Todos los derechos reservados.
          </p>
          <p className="footer__disclaimer">
            ⚠️ <strong>Aviso Legal:</strong> Este es un proyecto de portfolio ficticio creado con fines demostrativos. 
            Por favor, <strong>no introduzcas datos personales reales, correos electrónicos verdaderos ni contraseñas.</strong> 
            Los datos introducidos quedan registrados en una base de datos de prueba temporal.
          </p>
        </div>
      </div>
    </footer>
  );
}
