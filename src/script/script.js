document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const headerLinks = document.querySelector(".header-links ul");

  menuToggle.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    headerLinks.style.display =
      headerLinks.style.display === "block" ? "none" : "block";
  });
});
