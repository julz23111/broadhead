"use client";

import Image from "next/image";
import Link from "next/link";

const frames = [
  "/images/product-1.png",
  "/images/product-2.png",
  "/images/product-3.png",
  "/images/product-4.png",
  "/images/product-5.png",
  "/images/product-6.png",
  "/images/product-7.png",
  "/images/product-8.png",
];

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "6rem 2rem",
      }}
    >
      <style>
        {`
@keyframes spinFrames {
  0%   { background-image: url('/images/product-1.png'); }
  12.5%{ background-image: url('/images/product-2.png'); }
  25%  { background-image: url('/images/product-3.png'); }
  37.5%{ background-image: url('/images/product-4.png'); }
  50%  { background-image: url('/images/product-5.png'); }
  62.5%{ background-image: url('/images/product-6.png'); }
  75%  { background-image: url('/images/product-7.png'); }
  87.5%{ background-image: url('/images/product-8.png'); }
  100% { background-image: url('/images/product-1.png'); }
}
        `}
      </style>

      {/* ENGINEERED FEATURES */}
      <h2
        style={{
          color: "#ff7f00",
          fontSize: "2.75rem",
          textAlign: "center",
          marginBottom: "2.5rem",
          letterSpacing: "0.5px",
        }}
      >
        Engineered Features &amp; Benefits
      </h2>
      <section
        className="about-grid"
        style={{
          maxWidth: 1300,
          margin: "0 auto 5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <style>
          {`
            @media (max-width: 900px) {
              .about-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
        {/* LEFT: SPINNER */}
        <div
          style={{
            padding: "3rem",
            background: "rgba(255,127,0,0.08)",
            border: "1px solid rgba(255,127,0,0.5)",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "0 0 40px rgba(255,127,0,0.35)",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              height: 380,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              animation: "spinFrames 2.5s steps(1) infinite",
              transform: "rotate(-90deg)",
              filter: "drop-shadow(0 0 40px rgba(255,127,0,0.35))",
            }}
          />
          <p
            style={{
              marginTop: "1.75rem",
              maxWidth: 640,
              textAlign: "center",
              lineHeight: 1.75,
              opacity: 0.95,
              fontSize: "1.1rem",
            }}
          >
            Designed by an archer who understands the frustration of a missed shot and a
            broadhead buried deep in a tree or target. Broadhead Buddy™ is purpose-built to
            remove embedded broadheads safely and efficiently.
          </p>
        </div>

        {/* RIGHT: FEATURES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.75rem",
          }}
        >
          <Feature
            icon="/icons/caliper.png"
            title="Precision CNC Machining"
            text="Machined from billet 304 stainless steel and 6061 aluminum, eliminating weak points and ensuring consistent performance."
          />
          <Feature
            icon="/icons/gears.png"
            title="Mechanical Advantage"
            text="Controlled axial force multiplication delivers massive pulling power with minimal effort."
          />
          <Feature
            icon="/icons/wrenches.png"
            title="Multi‑Functionality"
            text="Compatible with fixed and mechanical 2, 3, and 4‑blade broadheads, field points, and inserts."
          />
          <Feature
            icon="/icons/shield.png"
            title="Durability & Performance"
            text="Premium construction and corrosion‑resistant materials outperform cast alternatives."
          />
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto 4rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#ff7f00", fontSize: "2.75rem", marginBottom: "1.25rem" }}>
          What makes Broadhead Buddy™ different
        </h2>
        <p
          style={{
            marginBottom: "2.75rem",
            opacity: 0.95,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "1.15rem",
          }}
        >
          Purpose‑built for hunters who demand fast extraction, safe handling, and
          gear that won’t fail when it matters.
        </p>

        <style>
        {`
.card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 32px rgba(255,127,0,0.45);
}
@keyframes swivel {
  0%   { transform: rotateY(0deg); }
  25%  { transform: rotateY(15deg); }
  50%  { transform: rotateY(0deg); }
  75%  { transform: rotateY(-15deg); }
  100% { transform: rotateY(0deg); }
}
        `}
        </style>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            perspective: "1200px",
          }}
        >
          {[
            {
              title: "Compact & Lightweight",
              text: "Only 6.5 oz and palm‑sized at 6″ — small enough for a bino harness or pocket, always with you when needed.",
            },
            {
              title: "Purpose Built",
              text: "Not a T‑handle or slide hammer. Designed specifically for safe, controlled extraction without brute force.",
            },
            {
              title: "Universal Fit",
              text: "Works with thicker blade designs. Compatible with Iron Will S, Exodus, Bishop, Tuff Head Evolution 2.0, Trophy Taker A‑Tac, and others.",
            },
            {
              title: "Broadhead‑Safe",
              text: "Cleated anchoring prevents twisting. No‑contact slots protect blade edges and zero‑torque extraction keeps heads reusable.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="card"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,127,0,0.35)",
                borderRadius: 18,
                padding: "1.75rem 1.5rem",
                animation: `swivel 5s ease-in-out ${i * 0.6}s infinite`,
                transformStyle: "preserve-3d",
                boxShadow: "0 0 26px rgba(255,127,0,0.25)",
              }}
            >
              <h3
                style={{
                  color: "#ff7f00",
                  marginBottom: "0.75rem",
                  fontSize: "1.15rem",
                }}
              >
                {card.title}
              </h3>
              <p style={{ lineHeight: 1.7 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ textAlign: "center" }}>
        <Link
          href="/shop"
          style={{
            display: "inline-block",
            backgroundColor: "#ff7f00",
            color: "#000",
            fontWeight: 900,
            padding: "1rem 3rem",
            borderRadius: 999,
            textDecoration: "none",
            boxShadow: "0 0 32px rgba(255,127,0,0.6)",
          }}
        >
          Shop Broadhead Buddy →
        </Link>
      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="card"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,127,0,0.3)",
        borderRadius: 16,
        padding: "1.75rem",
        textAlign: "left",
      }}
    >
      <Image src={icon} alt={title} width={42} height={42} />
      <h3 style={{ color: "#ff7f00", marginTop: "1rem" }}>{title}</h3>
      <p style={{ lineHeight: 1.7 }}>{text}</p>
    </div>
  );
}
