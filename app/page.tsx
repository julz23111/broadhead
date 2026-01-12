"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 2rem",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('/images/archer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#ff7f00",
              fontSize: "3.5rem",
              marginBottom: "1rem",
              letterSpacing: "1px",
            }}
          >
            "Leave No Broadhead Behind"™
          </h1>

          <p
            style={{
              maxWidth: 900,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              opacity: 0.9,
              marginBottom: "1.25rem",
            }}
          >
            The Broadhead Buddy™ is the ultimate broadhead extraction tool—engineered to
            recover stuck broadheads, field points and arrow inserts without damage.
            You’ve invested in the best broadheads for a reason, so don't leave them
            buried in a tree. Instead of leaving a broadhead behind, save it, and your
            money from having to buy replacement broadheads.
          </p>

          

          <Link
            href="/about"
            style={{
              display: "inline-block",
              backgroundColor: "#ff7f00",
              color: "#000",
              fontWeight: 900,
              padding: "1rem 3rem",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: "0 0 36px rgba(255,127,0,0.6)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 0 46px rgba(255,127,0,0.85)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 36px rgba(255,127,0,0.6)";
            }}
          >
            Learn more →
          </Link>
        </div>
      </section>

      <style>
      {`
      @media (max-width: 900px) {
        .product-section {
          grid-template-columns: 1fr !important;
          gap: 3rem !important;
        }
      }
      `}
      </style>

      {/* PRODUCT SECTION */}
      <section
        className="product-section"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "6rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* LEFT: PRODUCT IMAGE */}
        <div
          style={{
            background: "rgba(255,127,0,0.08)",
            border: "1px solid rgba(255,127,0,0.5)",
            borderRadius: 20,
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 40px rgba(255,127,0,0.35)",
            textAlign: "center",
          }}
        >
          <Image
            src="/images/tool.png"
            alt="Broadhead Buddy Tool"
            width={560}
            height={360}
            style={{
              width: "100%",
              maxWidth: 520,
              height: "auto",
              filter: "drop-shadow(0 0 40px rgba(255,127,0,0.35))",
            }}
          />
        </div>

        {/* RIGHT: DESCRIPTION */}
        <div>
          <h2
            style={{
              color: "#ff7f00",
              fontSize: "2.5rem",
              marginBottom: "1.5rem",
            }}
          >
            Built for Archers, by Archers
          </h2>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Designed by an archer who knows the frustration of a missed shot and a
            stuck broadhead. Whether you're bowhunting or target shooting, the
            Broadhead Buddy™ is purpose-built to remove embedded broadheads safely
            and efficiently.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            No more using your arrow for leverage, prying with pliers, or chiseling
            around blades to free the head. These risky methods can break arrow
            shafts, bend ferrules, or chip blades. Broadhead Buddy™ eliminates the
            damage and gets your broadhead back.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            The Broadhead Buddy™ is built to last and engineered for serious
            performance. Order yours below or ask your local pro shop to carry it.
          </p>

          <div style={{ marginTop: "2.5rem" }}>
            <Link
              href="/shop"
              style={{
                display: "inline-block",
                backgroundColor: "#ff7f00",
                color: "#000",
                fontWeight: 900,
                padding: "0.9rem 2.5rem",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 0 28px rgba(255,127,0,0.6)",
              }}
            >
              Go to Shop →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
