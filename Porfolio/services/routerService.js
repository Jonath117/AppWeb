const Router = {
  routes: {
    home: "inicio-page",
    blog: "blogs-page",
    contact: "contact-page",
    projects: "projects-page",
    aboutMe: "about-me-page",
    savedblogs : "savedblogs-page",
  },

  init(){
    window.addEventListener("navigate", (e) => {
      const route = e.detail;
      this.navigate(route);
    });

    window.addEventListener("hashchange", () => {
      const route = location.hash.slice(1);
      this.navigate(route);
    });

    const initialRoute = location.hash.slice(1);
    if(initialRoute && this.routes[initialRoute]) {
      this.navigate(initialRoute);
    }
  },

  navigate(route) {
    const tagName = this.routes[route];
    const root = document.getElementById("main-container");

    if(route === "inicio-page") {
      renderInitialHome();
      location.hash = "";
      return;
    }

    if(tagName && root) {
      root.innerHTML = ""
      const page = document.createElement(tagName);
      page.classList.add("fade-in");
      root.appendChild(page);
    }

    location.hash = route;
  },
};

export function renderInitialHome(){
  const root = document.getElementById("main-container");
  if(!root) return;

  root.innerHTML= "";

  const navbar = document.createElement("navbar-page");
  const inicio = document.createElement("inicio-page");
  const footer = document.createElement("footer-page"); 

  root.appendChild(navbar);
  root.appendChild(inicio);
  root.appendChild(footer);
}

export default Router;