import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <address>
              40 Rue de la République<br />
              69002 Lyon, France<br />
              Téléphone : 06 00 00 00 00
            </address>
            <div className="d-flex gap-3 fs-3">
              <a href="https://github.com" target="_blank" rel="nofollow noreferrer" className="text-dark footer-icon"><i className="bi bi-github"></i></a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noreferrer" className="text-dark footer-icon"><i className="bi bi-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow noreferrer" className="text-dark footer-icon"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark footer-link">Accueil</a></li>
              <li><a href="/services" className="text-dark footer-link">Services</a></li>
              <li><a href="/portfolio" className="text-dark footer-link">Portfolio</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="text-dark footer-link">Fresh Food</a></li>
              <li><a href="/portfolio" className="text-dark footer-link">Akira</a></li>
              <li><a href="/portfolio" className="text-dark footer-link">Espace bien-être</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-dark text-white mt-4">
        <small>&copy; 2024 John Doe</small>
      </div>
    </footer>
  );
};

export default Footer;