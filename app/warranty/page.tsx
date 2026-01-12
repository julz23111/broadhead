export default function WarrantyPage() {
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
              letterSpacing: "1px",
            }}
          >
            Warranty Information
          </h1>
          <p style={{ opacity: 0.85 }}>
            Our commitment to quality and craftsmanship.
          </p>
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
            <h2 style={{ color: "#ff7f00" }}>Warranty</h2>
            <p>
              JEBCO LLC stands behind its Broadhead Buddy™. We offer a one (1) year
              Manufacturing Defect Warranty from the date of purchase to the original
              customer. This warranty applies only to the original purchaser and is not
              transferable. While we strive to provide exceptional service, our warranty
              is limited, and we are not liable for any consequential or incidental
              damage.
            </p>
            <p>
              If your Broadhead Buddy™ fails due to a manufacturing defect, JEBCO LLC
              will, at its discretion, repair or replace the failed part or product free
              of charge.
            </p>
          </div>
  
          <div>
            <h2 style={{ color: "#ff7f00" }}>Exclusions</h2>
            <p>
              This warranty does not cover damage resulting from misuse, modification,
              abuse, accidents, lack of upkeep, or normal wear and tear. Cosmetic
              imperfections that do not affect functionality are not considered defects
              and are excluded from warranty coverage.
            </p>
          </div>
  
          <div>
            <h2 style={{ color: "#ff7f00" }}>Upkeep</h2>
            <p>
              To maximize the life and performance of your Broadhead Buddy™, apply a thin
              layer of metal-free anti-seize lubricant to the threaded section of the bolt
              where the knob moves. Full coverage isn’t necessary—just enough to prevent
              galling between the aluminum knob and stainless-steel bolt.
            </p>
            <p>
              Additionally, occasionally add a small amount of multi-purpose oil to the
              bearing washer. These steps help ensure smooth, trouble-free operation.
            </p>
          </div>
  
          <div>
            <h2 style={{ color: "#ff7f00" }}>Warranty Claim</h2>
            <p>
              To initiate a warranty claim, notify us by email describing the defect and
              provide photos of the defect along with your proof of purchase. Our team
              will assess the issue and determine the appropriate remedy.
            </p>
          </div>
  
          <div style={{ marginTop: "2rem", opacity: 0.75 }}>
            © 202 JEBCO LLC – All Rights Reserved
           
          </div>
        </section>
      </main>
    );
  }
  