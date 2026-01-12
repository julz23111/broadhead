"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundImage: "url('/images/camo-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "contrast(1.2) saturate(1.15)",
        borderBottom: "1px solid rgba(255,127,0,0.3)",
      }}
    >
      <style>
        {`
          @keyframes logoGlow {
            0% {
              filter: drop-shadow(0 0 6px rgba(255,127,0,0.4));
            }
            50% {
              filter: drop-shadow(0 0 16px rgba(255,127,0,0.9));
            }
            100% {
              filter: drop-shadow(0 0 6px rgba(255,127,0,0.4));
            }
          }

          .desktop-nav {
            display: flex;
            gap: 1.75rem;
            align-items: center;
          }

          .desktop-nav a {
            color: #fff;
            font-weight: 600;
            text-decoration: none;
            position: relative;
          }

          .desktop-nav a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            background: #ff7f00;
            transform: scaleX(0);
            transition: transform 0.25s ease;
          }

          .desktop-nav a:hover::after {
            transform: scaleX(1);
          }

          .mobile-only {
            display: none;
          }

          @media (max-width: 900px) {
            .desktop-nav {
              display: none;
            }
            .mobile-only {
              display: inline-block;
            }
          }
        `}
      </style>

      {/* dark overlay */}
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55))",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* BRAND */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <img
              src="/icons/bb-logo-tm-metallic.png"
              alt="Broadhead Buddy Logo"
              style={{
                height: 80,
                animation: "logoGlow 3s ease-in-out infinite",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span
                style={{
                  color: "#ff7f00",
                  fontWeight: 800,
                  fontSize: "3rem",
                  letterSpacing: "0.5px",
                }}
              >
                BROADHEAD BUDDY™
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "1.7rem",
                  letterSpacing: "0.3px",
                }}
              >
                The Ultimate Arrow Point Puller by JEBCO
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="desktop-nav">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <div style={{ marginLeft: "1.25rem" }}>
              <NavLink href="/how-it-works">How It Works</NavLink>
            </div>
            <NavLink href="/shop">Shop</NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-only"
            onClick={() => setOpen(!open)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,127,0,0.6)",
              color: "#ff7f00",
              padding: "0.45rem 0.9rem",
              borderRadius: 8,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            MENU
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <>
          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
              zIndex: 998,
              pointerEvents: "auto",
            }}
          />

          {/* SIDE DRAWER */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "260px",
              background: "rgba(0,0,0,0.95)",
              borderLeft: "1px solid rgba(255,127,0,0.35)",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              zIndex: 1000,
              boxShadow: "-8px 0 30px rgba(0,0,0,0.6)",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                alignSelf: "flex-end",
                background: "transparent",
                border: "none",
                color: "#ff7f00",
                fontSize: "1.5rem",
                fontWeight: 800,
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              ✕
            </button>
            <NavLink href="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>About</NavLink>
            <div style={{ marginTop: "0.75rem" }}>
              <NavLink href="/how-it-works" onClick={() => setOpen(false)}>
                How It Works
              </NavLink>
            </div>
            <NavLink href="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          </div>
        </>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        color: "#fff",
        textDecoration: "none",
        transition: "color 0.2s ease",
        fontSize: "1.15rem",
        letterSpacing: "0.3px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ff7f00";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#fff";
      }}
    >
      {children}
    </Link>
  );
}
