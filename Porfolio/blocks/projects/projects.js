const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/projects/projects.css">

        <section id="proyect" class="proyectos">
          <h2 class="seccion__titulo">Proyectos Destacados</h2>
          <div class="proyectos-destacados">
              <div class="proyecto">
                  <div class="proyecto__imagen">Imagen del Proyecto 2</div>
                  <div class="proyecto__contenido">
                      <h3 class="proyecto__titulo">Repositorio de Articulos Cientificos</h3>
                      <p class="proyecto__descripcion">Desarrollado con Angular 18, .Net 7 y aplicando metologías ágiles de desarrollo
                        en equipo, consiste en un sitio donde se almacenan artículos, se manejan roles,
                        se aplica una interfaz clara e intuitiva para una buena experiencia del usuario
                        fina.</p>
                      <a href="#" class="proyecto__enlace">Ver proyecto →</a>
                  </div>
              </div>
              <div class="proyecto">
                  <div class="proyecto__imagen">Imagen del Proyecto 2</div>
                  <div class="proyecto__contenido">
                      <h3 class="proyecto__titulo">Estrella de la muerte</h3>
                      <p class="proyecto__descripcion">Aplicación web para gestionar tareas diarias con React y Firebase.</p>
                      <a href="#" class="proyecto__enlace">Ver proyecto →</a>
                  </div>
              </div>
              <div class="proyecto">
                  <div class="proyecto__imagen">Imagen del Proyecto 2</div>
                  <div class="proyecto__contenido">
                      <h3 class="proyecto__titulo">Este Portafolio</h3>
                      <p class="proyecto__descripcion">Aplicación web para gestionar tareas diarias con React y Firebase.</p>
                      <a href="#" class="proyecto__enlace">Ver proyecto →</a>
                  </div>
              </div>
        </section>
`
;
class ProjectsPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("projects-page", ProjectsPage);