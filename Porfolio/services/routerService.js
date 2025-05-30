const Router = {
    init() {
        const links = document.querySelectorAll("a.navbar-principal__link");
        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const route = event.target.getAttribute("href");
                this.go(route, true);
            });
        });

        window.addEventListener("popstate", (event) => {
            this.go(event.state.route, false);
        });

        const validRoutes = ["/", "/projects", "/blog", "/about-me", "/contacto"];
        const initialRoute = validRoutes.includes(location.pathname) ? location.pathname : "/";
        this.go(initialRoute, false);
    },

    go(route, saveToHistory = false) {
        if(saveToHistory)
            history.pushState({ route }, "", route);

        const mainElement = document.getElementById('main');
        mainElement.innerHTML = "";

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
            case '/about-me':
              templateId = 'about-me-template';
                break;
            case '/contacto':
                templateId = 'contacto-template';
                break;
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
        
        window.scrollTo(0, 0);
    }
}

export default Router;