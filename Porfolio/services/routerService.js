export const Router = {
  init: () => {
    document.querySelectorAll("a.navbar-principal__link").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        Router.go(href);
      });
    });

    window.addEventListener("popstate", (event) => {
      Router.go(event.state?.route || "/", false);
    });

    Router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let file = null;

    switch (route) {
      case "/":
        file = document.createElement("main");
        file.textContent("Home");
        break;
      case "/contacto":
      case "/contacto.html":
        file = document.createElement("main");
        file.textContent("Contacto");
        break;
      default:
        file = "/partials/404.html";
        break;
    }

    fetch(file)
      .then((res) => res.text())
      .then((html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.error("Error al cargar la página:", err);
      });
  },
};
