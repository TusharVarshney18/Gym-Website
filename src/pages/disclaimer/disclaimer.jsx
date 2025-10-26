import React from "react";
import "./disclaimer.css";

export default function Disclaimer() {
  return (
    <main className="legal-page" aria-labelledby="disclaimer-heading">
      <section className="disclaimer-card">
        <h1 id="disclaimer-heading">Disclaimer</h1>

        <div className="notice" role="note" aria-label="Assets notice">
          <p>
            <strong>Assets:</strong> Trademarks, logos, images, and videos shown
            on this site are the property of their respective owners and are
            used for a non‑commercial student/portfolio project only. No
            infringement is intended, and no endorsement is implied.
          </p>
        </div>

        <h2>Educational Use</h2>
        <p>
          This website is presented for demonstration and educational purposes.
          Content is not intended as advice and should not be relied upon as
          such.
        </p>

        <h2>Attribution and Takedown</h2>
        <p>
          Rights holders may request changes or removal of specific assets by
          contacting hello@reallygreatsite.com. Requests will be addressed
          promptly.
        </p>

        <p className="disclaimer-meta">
          © {new Date().getFullYear()} Astraeus Fitness.
        </p>
      </section>
    </main>
  );
}
