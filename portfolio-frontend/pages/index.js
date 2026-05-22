import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://tajifilbert-portifolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p className="text-center mt-5">Loading portfolio...</p>;

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4 text-center">My Professional Portfolio</h1>

      {/* Skills */}
      <section className="mb-4">
        <h3>Skills</h3>
        {portfolio.skills.map((skill, i) => (
          <span key={i} className="badge bg-success me-2">{skill}</span>
        ))}
      </section>

      {/* Qualifications */}
      <section className="mb-4">
        <h3>Qualifications</h3>
        <ul className="list-group">
          {portfolio.qualifications.map((q, i) => (
            <li key={i} className="list-group-item">{q}</li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h3>Projects</h3>
        <div className="row">
          {portfolio.projects.map((p, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-4">
        <h3>Contact</h3>
        <p>📞 {portfolio.contact.phone}</p>
        <p>📧 {portfolio.contact.email}</p>
      </section>
    </div>
  );
}
