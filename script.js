const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");

  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  bodyEl.appendChild(spanEl);

  // After 3 seconds we want to remove the span.
  // This will make the hearts disappear after 3 seconds.
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
