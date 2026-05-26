return (
  <div>
    {/* Header */}
    <header className="bg-dark text-white text-center py-5 mb-4" 
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x400/?technology,data')", 
                     backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="bg-dark bg-opacity-75 p-4 rounded">
        <h1 className="display-4">{portfolio.name}</h1>
        <p className="lead">{portfolio.about}</p>
      </div>
    </header>

    <div className="container mt-5">
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
  </div>
);
