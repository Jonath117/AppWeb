const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/nav-bar/nav-bar.css">

    <nav class="navbar-principal">
          <ul class="navbar-principal__menu">

            <li><a class="navbar-principal__link" href="#" id="home-btn">Inicio</a></li>
            <li><a class="navbar-principal__link" href="#" id="blog-btn">Blog</a></li>
            <li><a class="navbar-principal__link" href="#" id="contact-btn">Contáctame</a></li>
            <li><a class="navbar-principal__link" href="#" id="projects-btn">Proyectos</a></li>
            <li><a class="navbar-principal__link" href="#" id="about-btn">Acerca de mí</a></li>
          </ul>
        </nav>
    </nav>
    <nav class="navbar-secundaria"> </nav>
    `
;
class NavBarPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        const homeBtn = this.shadowRoot.getElementById("home-btn");
        const blogBtn = this.shadowRoot.getElementById("blog-btn");
        const contactBtn = this.shadowRoot.getElementById("contact-btn");
        const projectsBtn = this.shadowRoot.getElementById("projects-btn");
        const aboutBtn = this.shadowRoot.getElementById("about-btn");
        
        const navigate = (route) => {
            window.dispatchEvent(new CustomEvent("navigate", {detail: route}));
        };

        homeBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            navigate("home");
        });

        blogBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            navigate("blog");
        });
        
        contactBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            navigate("contact");
        });
        
        projectsBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            navigate("projects");
        });
        
        aboutBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            navigate("aboutMe");
        });        
    }
}

customElements.define("navbar-page", NavBarPage);