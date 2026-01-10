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
  let isDragging = false;
  let dragAccumulator = 0;
  let lastPointerX = 0;
  const frameDelay = 180; // slowed rotation for smoother, premium spin
  const tiltStrength = 10;
  const dragThreshold = 18;

  // Spin animation using frame cycling
  setInterval(() => {
    if (!isHovering && !isDragging) {
      index = (index + 1) % frames.length;
      img.src = frames[index];
    }
  }, frameDelay);

  // Mouse tilt interaction (subtle)
  card.addEventListener("mousemove", (e) => {
    if (isDragging) return;
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
    if (isDragging) return;
    isHovering = false;
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });

  card.addEventListener("pointerdown", (e) => {
    isDragging = true;
    isHovering = true;
    dragAccumulator = 0;
    lastPointerX = e.clientX;
    card.setPointerCapture(e.pointerId);
  });

  card.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastPointerX;
    lastPointerX = e.clientX;
    dragAccumulator += deltaX;

    if (Math.abs(dragAccumulator) >= dragThreshold) {
      const direction = dragAccumulator > 0 ? -1 : 1;
      index = (index + direction + frames.length) % frames.length;
      img.src = frames[index];
      dragAccumulator = 0;
    }
  });

  card.addEventListener("pointerup", () => {
    isDragging = false;
    isHovering = false;
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });

  card.addEventListener("pointerleave", () => {
    if (!isDragging) {
      isHovering = false;
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  });
});
