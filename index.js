window.onload = () => {
  const open = document.getElementById("burger-menu-open");
  const close = document.getElementById("burger-menu-close");


  open.addEventListener("click", () => {
    open.style.display = "none";
    close.style.display = "block";
  });

  close.addEventListener("click", () => {
    close.style.display = "none";
    open.style.display = "block";
  });
};