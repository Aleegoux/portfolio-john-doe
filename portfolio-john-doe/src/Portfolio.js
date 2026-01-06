import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "Fresh Food", tech: "PHP y MySQL", img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&q=80" },
    { title: "Restaurant Akira", tech: "WordPress", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80" },
    { title: "Espace bien-être", tech: "HTML y CSS", img: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?w=400&q=80" },
    { title: "SEO Optimisation", tech: "Marketing Digital", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
    { title: "App Mobile", tech: "React Native", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" },
    { title: "E-commerce", tech: "Node.js", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80" }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-uppercase">Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <hr className="border-primary border-3 opacity-75 w-25 mx-auto" />
      </div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 border-0 shadow-sm">
              <img src={project.img} className="card-img-top" alt={project.title} />
              <div className="card-body text-center">
                <h3 className="card-title h5">{project.title}</h3>
                <p className="card-text">Conception d'un site avec {project.tech}.</p>
                <button className="btn btn-outline-primary">Voir le projet</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;