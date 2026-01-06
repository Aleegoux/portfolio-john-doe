import React from 'react';

const Services = () => {
  const services = [
    {
      title: "UX DESIGN",
      icon: "bi-search",
      description: "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale."
    },
    {
      title: "DÉVELOPPEMENT WEB",
      icon: "bi-code-slash",
      description: "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP."
    },
    {
      title: "RÉFÉRENCEMENT",
      icon: "bi-graph-up-arrow",
      description: "Le référencement naturel d'un site, aussi appelé SEO, consiste à optimiser sa visibilité dans les moteurs de recherche."
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-uppercase">Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <hr className="border-primary border-3 opacity-75 w-25 mx-auto" />
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 text-center p-4 border-0 shadow-sm">
              <div className="card-body">
                <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                <h3 className="card-title text-uppercase h5">{service.title}</h3>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;