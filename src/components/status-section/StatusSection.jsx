import React from 'react'
import "./StatusSection.css"
const StatusSection = () => {
    const stats = [
    { label: "Trusted Clients", value: "250+", id: "clients" },
    { label: "Projects Completed", value: "400+", id: "projects" },
    { label: "Years in Business", value: "15+", id: "years" },
    { label: "Awards Won", value: "30+", id: "awards" },
  ];
  return (
   <section className="stats-section-container">
      <div className="stats-section-header">
        <h2 className="stats-section-title">Our Achievements & Impact</h2>
        <p className="stats-section-subtitle">
          Building trust and delivering excellence, one project at a time.
        </p>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.id}>
            <div className={`stat-number animate-${stat.id}`}>{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatusSection