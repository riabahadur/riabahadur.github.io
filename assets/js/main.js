document.addEventListener("DOMContentLoaded", function () {

  const menuButton =
    document.getElementById("mobileMenuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const menuSymbol =
    menuButton
      ? menuButton.querySelector(
          ".mobile-menu-button__symbol"
        )
      : null;


  if (!menuButton || !mobileMenu) {
    return;
  }


  function menuIsOpen() {

    return document.body.classList.contains(
      "mobile-menu-open"
    );

  }


  function openMenu() {

    document.body.classList.add(
      "mobile-menu-open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      "false"
    );

    if (menuSymbol) {
      menuSymbol.textContent = "−";
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

    if (menuSymbol) {
      menuSymbol.textContent = "+";
    }

  }


  function toggleMenu() {

    if (menuIsOpen()) {
      closeMenu();
    }

    else {
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

      if (
        event.key === "Escape" &&
        menuIsOpen()
      ) {

        closeMenu();

        menuButton.focus();

      }

    }
  );


  window.addEventListener(
    "resize",
    function () {

      if (
        window.innerWidth > 980 &&
        menuIsOpen()
      ) {

        closeMenu();

      }

    }
  );

});
