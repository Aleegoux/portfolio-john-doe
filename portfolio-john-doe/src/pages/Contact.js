import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5" style={{ background: "linear-gradient(rgba(0, 123, 255, 0.05), rgba(0, 123, 255, 0.05))" }}>
      <div className="text-center mb-5">
        <h1 className="text-uppercase">Me contacter</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <hr className="border-primary border-3 opacity-75 w-25 mx-auto" />
      </div>

      <div className="row shadow-lg bg-white rounded p-4">
        {/* Formulario de contacto */}
        <div className="col-md-6 mb-4">
          <h3>Formulaire de contact</h3>
          <hr className="border-primary w-100" />
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Votre nom" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Votre adresse email" required />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Sujet" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Votre message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">Envoyer</button>
            </div>
          </form>
        </div>

        {/* Coordenadas y Mapa */}
        <div className="col-md-6">
          <h3>Mes coordonnées</h3>
          <hr className="border-primary w-100" />
          <address>
            <p><i className="bi bi-geo-alt"></i> 40 Rue de la République, 69002 Lyon, France</p>
            <p><i className="bi bi-phone"></i> 06 00 00 00 00</p>
          </address>
          <div className="ratio ratio-16x9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m2!1s0x47f4ea490906201f%3A0xc3f9479e9514e82d!2s40%20Rue%20de%20la%20R%C3%A9publique%2C%2069002%20Lyon%2C%20France!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea490906201f%3A0xc3f9479e9514e82d!2zNDAgUnVlIGRlIGxhIFLDqXB1YmxpcXVlLCA2OTAwMiBMeW9uLCBGcmFuY2U!5e0!3m2!1sfr!2ses!4v1700000000000!5m2!1sfr!2ses" 
              title="Google Maps Lyon"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;