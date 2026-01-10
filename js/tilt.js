/*
  Broadhead Buddy – Faux 3D Spin (Multi-Image)
  Uses multiple images to simulate a rotating product
*/

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".product-3d img");
  const card = document.querySelector(".product-3d");
  if (!img || !card) return;

  // List your product angles here
  const frames = [
    "assets/images/product-1.png",
    "assets/images/product-2.png",
    "assets/images/product-3.png",
    "assets/images/product-4.png"
  ];

  let index = 0;
  let isHovering = false;
  const frameDelay = 180; // slowed rotation for smoother, premium spin
  const tiltStrength = 10;

  // Spin animation using frame cycling
  const spinInterval = setInterval(() => {
    if (!isHovering) {
      index = (index + 1) % frames.length;
      img.src = frames[index];
    }
  }, frameDelay);

  // Mouse tilt interaction (subtle)
  card.addEventListener("mousemove", (e) => {
    isHovering = true;

    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    card.style.transform = `
      rotateY(${(x / width) * tiltStrength}deg)
      rotateX(${-(y / height) * tiltStrength}deg)
    `;
  });

  card.addEventListener("mouseleave", () => {
    isHovering = false;
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});