import React from 'react';

const Legals = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-uppercase">Mentions Légales</h1>
        <hr className="border-primary border-3 opacity-75 w-25 mx-auto" />
      </div>

      <div className="accordion" id="accordionMentions">
        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#editor">
              Éditeur du site
            </button>
          </h2>
          <div id="editor" className="accordion-collapse collapse show" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <h3>John Doe</h3>
              <p><i className="bi bi-geo-alt"></i> 40 Rue de la République, 69002 Lyon, France</p>
              <p><i className="bi bi-phone"></i> 06 00 00 00 00</p>
              <p><i className="bi bi-envelope"></i> john.doe@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#host">
              Hébergeur
            </button>
          </h2>
          <div id="host" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <h3>AlwaysData</h3>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p><a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a></p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#credits">
              Crédits
            </button>
          </h2>
          <div id="credits" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <h3>Crédits</h3>
              <p>Site développé par John Doe, étudiant au CEF.</p>
              <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">Pixabay</a>.</p>
              <p>Le favicon est issu du site <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">Flaticon</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legals;