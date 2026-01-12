"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/images/camo-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTop: "1px solid rgba(255,127,0,0.3)",
        padding: 0,
        boxShadow: "inset 0 1px 0 rgba(255,127,0,0.25)",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .footer-row {
              grid-template-columns: 1fr !important;
              text-align: center !important;
              gap: 0.75rem !important;
            }
            .footer-row > div {
              justify-content: center !important;
              align-items: center !important;
            }
          }
        `}
      </style>
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55))",
          padding: "0.75rem 2rem",
        }}
      >
        <div
          className="footer-row"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.35rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
              }}
            >
              <Social
                href="https://facebook.com/profile.php?id=61581792676686"
                icon="/icons/nbg-f.png"
                alt="Facebook"
              />
              <Social
                href="https://x.com/@broadhead_buddy"
                icon="/icons/nbg-x.png"
                alt="X"
              />
              <Social
                href="https://www.instagram.com/broadhead_buddy"
                icon="/icons/nbg-inst.png"
                alt="Instagram"
              />
              <Social
                href="https://www.youtube.com/@broadhead_buddy"
                icon="/icons/nbg-yt.png"
                alt="YouTube"
              />
              <Social
                href="https://www.tiktok.com/@broadhead_buddy"
                icon="/icons/nbg-tt.png"
                alt="TikTok"
              />
            </div>

            <p
              style={{
                color: "#fff",
                fontSize: "0.95rem",
                letterSpacing: "0.4px",
                opacity: 0.9,
              }}
            >
              @Broadhead_Buddy
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <Image
              src="/images/jebco-logo-tm-color.png"
              alt="JEBCO LLC Logo"
              width={75}
              height={25}
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 0 10px rgba(255,127,0,0.35))",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                fontSize: "0.8rem",
                letterSpacing: "0.3px",
              }}
            >
              <Link href="/privacy" style={{ color: "#ff7f00", textDecoration: "none" }}>
                Privacy
              </Link>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>•</span>
              <Link href="/warranty" style={{ color: "#ff7f00", textDecoration: "none" }}>
                Warranty
              </Link>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>•</span>
              <Link href="/legal" style={{ color: "#ff7f00", textDecoration: "none" }}>
                Legal
              </Link>
            </div>

            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.35px",
              }}
            >
              © {new Date().getFullYear()} JEBCO LLC — All Rights Reserved.
            </p>
          </div>

          <div
            className="footer-right"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "0.75rem",
            }}
          >
            <Image
              src="/images/sdvosb-seal.png"
              alt="Service-Disabled Veteran-Owned Small Business"
              width={75}
              height={75}
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/images/veteran-seal.png"
              alt="Veteran Owned Business"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  icon,
  alt,
}: {
  href: string;
  icon: string;
  alt: string;
}) {
  return (
    <Link href={href} target="_blank">
      <Image
        src={icon}
        alt={alt}
        width={36}
        height={36}
        style={{
          objectFit: "contain",
          filter: "drop-shadow(0 0 8px rgba(255,127,0,0.35))",
          transition: "transform 0.2s ease, filter 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15)";
          e.currentTarget.style.filter =
            "drop-shadow(0 0 14px rgba(255,127,0,0.8))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.filter =
            "drop-shadow(0 0 8px rgba(255,127,0,0.35))";
        }}
      />
    </Link>
  );
}
