/*
  Broadhead Buddy – Core UI Script
  Purpose:
  - Mobile navigation toggle
  - Header open/close state
  - Click-outside to close menu
*/

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  // Exit safely if required elements are missing
  if (!header || !menuToggle || !nav) return;

  // Toggle mobile menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.toggle("open");
  });

  // Close menu when clicking outside header/nav
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      header.classList.remove("open");
    }
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
    });
  });

  const purchaseCheck = document.querySelector("#purchase-check");
  if (purchaseCheck) {
    const buyButtons = document.querySelectorAll("[data-purchase-link]");
    const toggleButtons = () => {
      buyButtons.forEach((button) => {
        if (purchaseCheck.checked) {
          button.removeAttribute("disabled");
          button.setAttribute("aria-disabled", "false");
          button.classList.remove("btn-disabled");
        } else {
          button.setAttribute("disabled", "disabled");
          button.setAttribute("aria-disabled", "true");
          button.classList.add("btn-disabled");
        }
      });
    };

    purchaseCheck.addEventListener("change", toggleButtons);
    toggleButtons();

    buyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.hasAttribute("disabled")) return;
        const link = button.getAttribute("data-href");
        if (link) {
          window.open(link, "_blank", "noopener");
        }
      });
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    const status = document.querySelector("#form-status");
    const timestampField = document.querySelector("#form-start");

    if (timestampField) {
      timestampField.value = Date.now().toString();
    }

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const payload = Object.fromEntries(formData.entries());

      if (status) {
        status.textContent = "Sending your message...";
      }

      try {
        const response = await fetch("/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        contactForm.reset();
        if (timestampField) {
          timestampField.value = Date.now().toString();
        }

        if (status) {
          status.textContent = "Thanks! Your message has been sent.";
        }
      } catch (error) {
        if (status) {
          status.textContent = "Sorry, something went wrong. Please try again.";
        }
      }
    });
  }
});
