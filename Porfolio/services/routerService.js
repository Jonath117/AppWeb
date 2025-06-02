const Router = {
  init: () => {
    document.querySelectorAll("a.navbar-principal__link").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        Router.go(href);
      });
    });


    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });


    const validRoutes = ["/", "/projects", "/blog", "/about-me", "/contacto"];
    const initialRoute = validRoutes.includes(location.pathname) ? location.pathname : "/";
    this.go(initialRoute, false);
  },

  go: (route, saveToHistory = false) => {
    if (saveToHistory) 
      history.pushState({ route }, "", route);
    
    const mainElement = document.getElementById("main");
    mainElement.innerHTML = '';

    let templateId = null;

        switch(route){
            case '/':
                templateId = 'inicio-template';
                break;
            case '/projects':
                templateId = 'proyectos-template';
                break;
            case '/blog':
                templateId = 'blog-template';
                break;
            case '/contacto':
                templateId = 'contacto-template';
                break;
            case '/about-me':
                templateId = 'about-me-template';
        }
        
      const template = document.getElementById(templateId);
        if (template) {
            const templateContent = template.content.cloneNode(true);
            mainElement.appendChild(templateContent);
        } else {
            mainElement.innerHTML = `
                <section class="error">
                    <h1>Error</h1>
                    <p>No se pudo cargar el contenido de la página.</p>
                </section>
            `;
        }

    window.scrollY = 0;
    window.scrollX = 0;
  },
};

export default Router;

