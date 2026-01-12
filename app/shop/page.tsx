"use client";

import React from "react";

export default function ShopPage() {
  const [showUnavailable, setShowUnavailable] = React.useState(false);

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "6rem 2rem",
      }}
    >
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#ff7f00",
            fontSize: "2.75rem",
            marginBottom: "2rem",
            letterSpacing: "1px",
          }}
        >
          Choose Your Buddy
        </h1>

        <p
          style={{
            maxWidth: 800,
            margin: "0 auto 3rem",
            lineHeight: 1.8,
          }}
        >
          Broadhead Buddy™ is a purpose-built tool designed to safely extract stuck
          broadheads, field points, and arrow inserts without damaging your gear.
          Select the option that’s right for you below.
        </p>

        <style>
          {`
          .product-card {
            transition: box-shadow 0.25s ease, transform 0.25s ease;
          }
          .product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 0 28px rgba(255,127,0,0.35);
          }
          .buy-btn {
            transition: box-shadow 0.25s ease, transform 0.25s ease, background-color 0.25s ease;
          }
          .buy-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 22px rgba(255,127,0,0.6);
          }
          `}
        </style>

        {/* PRODUCT OPTIONS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* STANDARD */}
          <div
            className="product-card"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,127,0,0.3)",
              borderRadius: 16,
              padding: "2rem",
            }}
          >
            <h2
              style={{
                color: "#ff7f00",
                marginBottom: "0.75rem",
                fontSize: "1.85rem",
                letterSpacing: "0.5px",
              }}
            >
              Broadhead Buddy™
            </h2>
            <p style={{ lineHeight: 1.7, marginTop: "1rem" }}>
              Precision-machined from premium materials and engineered for long-term
              durability. Designed to safely recover 2, 3, and 4-blade broadheads,
              field points, and inserts.
            </p>
            <button
              className="buy-btn"
              onClick={() => setShowUnavailable(true)}
              style={{
                marginTop: "1.75rem",
                backgroundColor: "#ff7f00",
                color: "#000",
                fontWeight: 800,
                padding: "0.75rem 1.75rem",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                width: "100%",
              }}
            >
              Buy Broadhead Buddy™
            </button>
          </div>

          {/* IMPERFECT */}
          <div
            className="product-card"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,127,0,0.3)",
              borderRadius: 16,
              padding: "2rem",
            }}
          >
            <h2
              style={{
                color: "#ff7f00",
                marginBottom: "0.75rem",
                fontSize: "1.85rem",
                letterSpacing: "0.5px",
              }}
            >
              Imperfect Buddy
            </h2>
            <p style={{ lineHeight: 1.7, marginTop: "1rem" }}>
              Functions identically to the Broadhead Buddy™, with cosmetic imperfections
              only. Limited quantities available while supplies last.
            </p>
            <button
              className="buy-btn"
              onClick={() => setShowUnavailable(true)}
              style={{
                marginTop: "1.75rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#ff7f00",
                fontWeight: 800,
                padding: "0.75rem 1.75rem",
                borderRadius: 8,
                border: "1px solid rgba(255,127,0,0.6)",
                cursor: "pointer",
                fontSize: "1rem",
                width: "100%",
              }}
            >
              Buy Imperfect Buddy
            </button>
          </div>
        </div>

        {/* ACKNOWLEDGEMENT */}
        <div
          style={{
            marginBottom: "2rem",
            textAlign: "left",
            maxWidth: 700,
            marginInline: "auto",
          }}
        >
          <label style={{ display: "flex", gap: "0.75rem", cursor: "pointer" }}>
            <span>
              By purchasing you agree to the{" "}
              <a href="/privacy" style={{ color: "#ff7f00", textDecoration: "underline" }}>
                Privacy
              </a>
              ,{" "}
              <a href="/warranty" style={{ color: "#ff7f00", textDecoration: "underline" }}>
                Warranty
              </a>
              , and{" "}
              <a href="/legal" style={{ color: "#ff7f00", textDecoration: "underline" }}>
                Legal
              </a>{" "}
              statements.
            </span>
          </label>
        </div>

        <p
          style={{
            fontSize: "0.85rem",
            opacity: 0.8,
            marginBottom: "2rem",
          }}
        >
          Payments are processed securely by Square. By continuing, you agree to Square’s{" "}
          <a
            href="https://squareup.com/help/us/en/article/3798-square-s-information-collection-policies"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ff7f00" }}
          >
            Information Collection & Privacy Policies
          </a>.
        </p>

        {/* WARNING */}
        <div
          style={{
            background: "rgba(255,255,0,0.08)",
            border: "1px solid #ffeb3b",
            padding: "1rem",
            borderRadius: 8,
            fontSize: "0.85rem",
            lineHeight: 1.6,
          }}
        >
          <strong>⚠️ WARNING:</strong> This product can expose you to chemicals
          including Nickel Acetate, which is known to the State of California to cause
          cancer. For more information, visit{" "}
          <a
            href="https://www.P65Warnings.ca.gov"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ff7f00" }}
          >
            www.P65Warnings.ca.gov
          </a>
          .
        </div>

        {showUnavailable && (
          <div
            onClick={() => setShowUnavailable(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#000",
                border: "1px solid rgba(255,127,0,0.5)",
                borderRadius: 16,
                padding: "2.5rem 2rem",
                maxWidth: 420,
                textAlign: "center",
                boxShadow: "0 0 40px rgba(255,127,0,0.6)",
              }}
            >
              <h3 style={{ color: "#ff7f00", marginBottom: "1rem" }}>
                Item Unavailable
              </h3>
              <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
                This item is currently unavailable at this time. Please check back soon
                or follow us for updates.
              </p>
              <button
                onClick={() => setShowUnavailable(false)}
                style={{
                  backgroundColor: "#ff7f00",
                  color: "#000",
                  fontWeight: 800,
                  padding: "0.6rem 1.5rem",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
