"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "6rem 2rem",
      }}
    >
      {/* HEADER */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto 3rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#ff7f00",
            fontSize: "2.75rem",
            marginBottom: "0.75rem",
          }}
        >
          Privacy Statement
        </h1>
        
      </section>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: "2.25rem",
        }}
      >
        <div>
          <h2 style={{ color: "#ff7f00" }}>Introduction</h2>
          <p>
            Welcome to broadhead-buddy.com (the “Site”), operated by JEBCO LLC (“we,” “us,” “our”). Because our Site is static and does not itself collect or store any personal information from visitors, this Privacy Statement primarily explains how third-party services handle data and directs you to their policies.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00" }}>What We Collect</h2>
          <p>
            JEBCO LLC for Broadhead Buddy™ does not collect, process, or store personal information (such as name, email address, payment card data, browsing history, etc.) via the Site. All content is static, and no registration or login is required for general browsing.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00" }}>Third-Party Services & Data Handling</h2>
          <p>
            <strong>Hosting & Infrastructure:</strong> Our Site is hosted by Cloudflare, Inc. You should consult their Privacy Policy for details on what data they may collect (e.g., IP addresses, usage logs, cookies) via their infrastructure. View their policy here: {" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ff7f00" }}
            >
              Cloudflare Privacy Policy
            </a>.
          </p>
          <p>
            <strong>Payment Processing:</strong> For purchases, we rely on Square Inc. to process credit-card payments. Square handles all payment card data, billing, and related personal information. View their policy here: {" "}
            <a
              href="https://squareup.com/help/us/en/topic/policies-and-terms"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ff7f00" }}
            >
              Square Privacy Policy
            </a>.
          </p>
          <p>
            Because we do not handle or store your payment information ourselves, inquiries about how your payment data is processed should be directed to Square.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00" }}>Cookies & Tracking</h2>
          <p>
            While our Site itself does not deploy tracking or analytics scripts, our hosting provider (Cloudflare) or other services may set cookies or log technical details (such as IP addresses, device data, etc.) in the normal course of delivering the Site. For more details, please refer to Cloudflare’s Privacy Policy.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00" }}>Use of Your Information</h2>
          <p>
            Since we do not collect personal information, we do not use it for marketing, analytics, or other purposes. Any data collected by third-party providers (hosting and payment processor) is governed by their respective policies.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00" }}>Disclosure of Information</h2>
          <p>
            We do not disclose personal information because we do not collect or store it. Any disclosure that may occur via hosting or payment processor services is governed by those third-parties according to their policies.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00" }}>Your Rights and Choices</h2>
          <p>
            If you wish to exercise data rights (access, correction, deletion) or inquire about data handling, you should contact the relevant third-party (e.g., Cloudflare or Square) as per their policy.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00" }}>Changes to this Statement</h2>
          <p>
            We may update this Privacy Statement from time to time. Changes will be posted on this page with an updated “Last Updated” date. Your continued use of the Site after such changes constitutes your acceptance of the revised Statement.
          </p>
        </div>

        

        <div style={{ marginTop: "2rem", opacity: 0.75 }}>
          © 2026 JEBCO LLC – All Rights Reserved
        </div>
      </section>
    </main>
  );
}
