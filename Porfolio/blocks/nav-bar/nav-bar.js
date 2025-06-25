const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/nav-bar/nav-bar.css">

    <nav class="navbar-principal">
          <ul class="navbar-principal__menu">

            <li><a class="navbar-principal__link" href="/">Inicio</a></li>
            <li><a class="navbar-principal__link" href="/blog">Blog</a></li>
            <li><a class="navbar-principal__link" href="/contacto">Contáctame</a></li>
            <li><a class="navbar-principal__link" href="/projects">Proyectos</a></li>
            <li><a class="navbar-principal__link" href="/about-me">Acerca de mí</a></li>
          </ul>
        </nav>
        <nav class="navbar-secundaria">  
    </nav>
    `
;
class NavBarPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("navbar-page", NavBarPage);