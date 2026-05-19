import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // 👉 Replace with your actual Render backend URL
    fetch("https://your-backend.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data));
  }, []);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-primary">My Profile</h1>

      <h3>Skills</h3>
      <div>
        {portfolio.skills.map((skill, i) => (
          <span key={i} className="badge bg-success me-2">{skill}</span>
        ))}
      </div>

      <h3 className="mt-4">Qualifications</h3>
      <ul>
        {portfolio.qualifications.map((q, i) => <li key={i}>{q}</li>)}
      </ul>

      <h3 className="mt-4">Projects</h3>
      <div className="row">
        {portfolio.projects.map((p, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-4">Contact</h3>
      <p>📞 {portfolio.contact.phone}</p>
      <p>📧 {portfolio.contact.email}</p>
    </div>
  );
}

export default App;

