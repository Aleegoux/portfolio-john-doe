import React, { useState, useEffect } from 'react';

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <section className="hero d-flex align-items-center justify-content-center text-center text-white" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')", 
          height: "100vh", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}>
        <div className="container bg-dark bg-opacity-50 p-5 rounded">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web Full Stack</h2>
          <button className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#githubModal">
            En savoir plus
          </button>
        </div>
      </section>

      <section className="container py-5">
        <div className="row shadow p-4 mb-5 bg-white rounded">
          <div className="col-md-6">
            <h3>À propos</h3>
            <hr className="border-primary border-3 opacity-75 w-25" />
            <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation de développeur web au CEF.</p>
            <p>Basé à Lyon, je recherche une alternance pour perfectionner mes compétences.</p>
          </div>
          <div className="col-md-6">
            <h3>Mes compétences</h3>
            <hr className="border-primary border-3 opacity-75 w-25" />
            <p>HTML5 90%</p>
            <div className="progress mb-3"><div className="progress-bar bg-danger" style={{width: "90%"}}></div></div>
            <p>CSS3 80%</p>
            <div className="progress mb-3"><div className="progress-bar bg-info" style={{width: "80%"}}></div></div>
            <p>JAVASCRIPT 70%</p>
            <div className="progress mb-3"><div className="progress-bar bg-warning" style={{width: "70%"}}></div></div>
            <p>PHP 60%</p>
            <div className="progress mb-3"><div className="progress-bar bg-success" style={{width: "60%"}}></div></div>
            <p>REACT 50%</p>
            <div className="progress mb-3"><div className="progress-bar" style={{width: "50%"}}></div></div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="githubModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">Mon profil GitHub</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src={user.avatar_url} alt="GitHub Avatar" className="rounded-circle mb-3" width="120" />
              <h4>{user.name || "John Doe"}</h4>
              <p>{user.bio || "Développeur en formation"}</p>
              <hr />
              <div className="d-flex justify-content-around">
                <span><strong>Abonnés:</strong> {user.followers}</span>
                <span><strong>Abonnements:</strong> {user.following}</span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;