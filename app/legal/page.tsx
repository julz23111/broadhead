export default function LegalPage() {
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
            marginBottom: "0.5rem",
            letterSpacing: "1px",
          }}
        >
          Legal & Safety Information
        </h1>
        <p style={{ opacity: 0.85 }}>
          Please read carefully before using Broadhead Buddy™.
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
          <h2 style={{ color: "#ff7f00", marginBottom: "0.75rem" }}>
            Warning
          </h2>
          <p>
            Use the Broadhead Buddy™ tool responsibly and only for its intended
            purpose of extracting broadheads, field points, and arrow inserts.
            Broadheads are sharp and should always be treated with caution.
            Misuse of this tool or improper handling of broadheads can result in
            personal injury or property damage.
          </p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "1rem" }}>
            <li>Caution — sleeve end has sharp pointed cleats.</li>
            <li>Sharp blades are exposed during extraction; gloves are recommended.</li>
            <li>Always follow instructions and use only as directed.</li>
            <li>Do not modify the tool; alteration may result in injury.</li>
            <li>Broadhead extraction is hazardous — use responsibly.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00", marginBottom: "0.75rem" }}>
            Disclaimer
          </h2>
          <p>
            The Broadhead Buddy™ is designed for safe and effective removal of
            broadheads when used as directed.
          </p>
          <p>
            JEBCO LLC is not responsible for damage resulting from misuse,
            alteration, modification, or abuse of the product. Always follow
            proper archery safety procedures and manufacturer instructions when
            using archery equipment.
          </p>
          <p>
            Broadheads lodged in trees or other surfaces are considered damaged
            prior to removal. The Broadhead Buddy™ assists with retrieval only
            and does not guarantee the condition or future usability of any
            broadhead. The owner is solely responsible for determining whether an
            extracted broadhead is safe to use.
          </p>
        </div>

        <div>
          <h2 style={{ color: "#ff7f00", marginBottom: "0.75rem" }}>
            Limitation of Liability
          </h2>
          <p>
            By using this product, you assume full responsibility for proper use,
            including adherence to instructions and warnings, and agree that
            JEBCO LLC shall not be held liable for any incidental, consequential,
            or indirect damages resulting from the use, modification, misuse, or
            inability to use the Broadhead Buddy™. This includes, but is not
            limited to, personal injury, property damage, or loss of equipment.
          </p>
          <p>
            JEBCO LLC’s total liability shall in no case exceed the original
            purchase price of the product. This limitation applies regardless of
            the form of action, whether in contract, tort, or otherwise.
          </p>
        </div>

        <div style={{ marginTop: "2rem", opacity: 0.75 }}>
          © 2026 JEBCO LLC – All Rights Reserved 
         
        </div>
      </section>
    </main>
  );
}