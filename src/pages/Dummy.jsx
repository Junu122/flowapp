import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
        color: "#222",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 4rem",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "2rem", letterSpacing: "2px" }}>
          ARCHFORM
        </div>
        <nav>
          <a
            href="#projects"
            style={{ textDecoration: "none", color: "#222", marginRight: "2rem", fontWeight: "500" }}
          >
            Projects
          </a>
          <a
            href="#studio"
            style={{ textDecoration: "none", color: "#222", marginRight: "2rem", fontWeight: "500" }}
          >
            Studio
          </a>
          <a
            href="#contact"
            style={{ textDecoration: "none", color: "#222", fontWeight: "500" }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "6rem 2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1rem",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          Minimalist Architecture. Timeless Design.
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#888",
            maxWidth: "600px",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          Discover spaces crafted with light, geometry, and simplicity. Architecture that elevates everyday living.
        </p>
        <a
          href="#projects"
          style={{
            background: "#222",
            color: "#fff",
            borderRadius: "30px",
            padding: "0.75rem 2rem",
            fontWeight: "500",
            fontSize: "1rem",
            textDecoration: "none",
            letterSpacing: "1px",
            boxShadow: "0 2px 8px rgba(30,30,30,0.07)"
          }}
        >
          View Projects
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "1.5rem 4rem",
          borderTop: "1px solid #eee",
          color: "#888",
          fontSize: "0.95rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>© 2025 Archform Studio. All rights reserved.</span>
        <span>
          <a
            href="mailto:info@archform.com"
            style={{ color: "#888", textDecoration: "none" }}
          >
            info@archform.com
          </a>
        </span>
      </footer>
    </div>
  );
};

export default HomePage;
