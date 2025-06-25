const Router = {
  routes: {
    home: "inicio-page",
    projects: "projects-page",
    blog: "blog-page",
    "about-me": "about-me-page",
    contacto: "contacto-page"
  },

  init() {
    // Manejar clicks en los enlaces de navegación
    document.querySelectorAll("a.navbar-principal__link").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        const route = href.replace(/\.html$/, "").replace(/^\//, "");
        Router.navigate(route);
      });
    });

    // Manejar cambios en el historial
    window.addEventListener("popstate", (event) => {
      const route = event.state?.route ? 
                    event.state.route.replace(/^\//, "").replace(/\.html$/, "") : 
                    "home";
      this.navigate(route, false);
    });

    // Cargar la ruta inicial basada en la URL
    const path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "");
    const initialRoute = this.routes[path] ? path : "home";
    this.navigate(initialRoute, false);
  },

  navigate(route, saveToHistory = true) {
    const componentTag = this.routes[route];
    const mainElement = document.getElementById("main");

    if (!mainElement) return;

    // Limpiar el main excepto el navbar y footer
    const navbar = mainElement.querySelector("navbar-page");
    const footer = mainElement.querySelector("footer-page");
    
    mainElement.innerHTML = "";
    if (navbar) mainElement.appendChild(navbar);
    
    if (route === "home") {
      this.renderInitialHome();
      if (saveToHistory) {
        history.pushState({ route: "/" }, "", "/");
      }
      return;
    }

    if (componentTag) {
      try {
        const pageElement = document.createElement(componentTag);
        pageElement.classList.add("fade-in");
        mainElement.appendChild(pageElement);
        
        if (footer) mainElement.appendChild(footer);
        
        if (saveToHistory) {
          const prettyRoute = route === "home" ? "/" : `/${route}`;
          history.pushState({ route: prettyRoute }, "", prettyRoute);
        }
      } catch (error) {
        console.error(`Error al cargar el componente ${componentTag}:`, error);
        this.renderErrorPage();
      }
    } else {
      this.renderErrorPage();
    }

    window.scrollTo(0, 0);
  },

  renderInitialHome() {
    const mainElement = document.getElementById("main");
    if (!mainElement) return;

    const navbar = mainElement.querySelector("navbar-page");
    const footer = mainElement.querySelector("footer-page");
    
    mainElement.innerHTML = "";
    if (navbar) mainElement.appendChild(navbar);
    
    const homePage = document.createElement("inicio-page");
    homePage.classList.add("fade-in");
    mainElement.appendChild(homePage);
    
    if (footer) mainElement.appendChild(footer);

    history.pushState({ route: "/" }, "", "/");
  },

  renderErrorPage() {
    const mainElement = document.getElementById("main");
    if (!mainElement) return;

    const errorHTML = `
      <section class="error fade-in">
        <h1>Error 404</h1>
        <p>La página solicitada no existe.</p>
        <a href="/" class="error-link">Volver al inicio</a>
      </section>
    `;
    
    mainElement.innerHTML = errorHTML;
  }
};

export default Router;