window.onload = () => {
  const open = document.getElementById("burger-menu-open");
  const close = document.getElementById("burger-menu-close");
  const navMenu = document.getElementById("nav-menu");

  open.addEventListener("click", () => {
    open.style.display = "none";
    close.style.display = "block";
    navMenu.classList.add("nav-menu-displayed")
  });

  close.addEventListener("click", () => {
    close.style.display = "none";
    open.style.display = "block";
    navMenu.classList.remove("nav-menu-displayed")
  });
};