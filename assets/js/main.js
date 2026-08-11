document.addEventListener("DOMContentLoaded", function () {

  const menuButton =
    document.getElementById("mobileMenuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  if (!menuButton || !mobileMenu) {
    return;
  }


  function openMenu() {

    document.body.classList.add("mobile-menu-open");

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      "false"
    );

    const symbol =
      menuButton.querySelector(
        ".mobile-menu-button__symbol"
      );

    if (symbol) {
      symbol.textContent = "−";
    }

  }


  function closeMenu() {

    document.body.classList.remove(
      "mobile-menu-open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      "true"
    );

    const symbol =
      menuButton.querySelector(
        ".mobile-menu-button__symbol"
      );

    if (symbol) {
      symbol.textContent = "+";
    }

  }


  function toggleMenu() {

    const isOpen =
      document.body.classList.contains(
        "mobile-menu-open"
      );

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }

  }


  menuButton.addEventListener(
    "click",
    toggleMenu
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {
        closeMenu();
      }

    }
  );


  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth > 980) {
        closeMenu();
      }

    }
  );

});
