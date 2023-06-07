window.onload = () => {
  const open = document.getElementById("burger-menu-open");
  const close = document.getElementById("burger-menu-close");
  const toggle = document.getElementById("toggle");

  open.addEventListener("click", () => {
    open.style.display = "none";
    close.style.display = "block";
    toggle.style.display = "block";
  });

  close.addEventListener("click", () => {
    close.style.display = "none";
    open.style.display = "block";
    toggle.style.display = "none";
  });
};