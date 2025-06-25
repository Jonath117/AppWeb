const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/inicio/inicio.css">
    <link rel="stylesheet" href="./blocks/habilidades/habilidades.css">

    <section class="presentacion-inicio">
        <h1>Hola, soy Jonathan</h1>
        <p class="texto">Soy estudiante de ingeniería de software apasionado por el desarrollo y resolución de problemas relacionado al mundo del software.</p>
        <p class="texto">He tenido experiencias en trabajo en equipo lo cual me ha aportado habilidades comunicativas cuando me toque colaborar con un equipo de desarrollo, para así poder comunicar y resolver de manera eficiente los problemas.</p>
        <p class="texto">Disfruto mucho de los videojuegos y de las actividades al aire libre, los deportes, actividades que requieren mucho esfuerzo físico.</p>
      </section>

      <h3 class="link">
        <a href="projects.html">Mira mis Proyectos →</a>
      </h3>


      <section class="habilidades">
        <h2 class="habilidades__titulo"> Habilidades Técnicas</h2>
        <div class="habilidades__lista">
          <div class="habilidades__item">
            <img src="./assets/images/angular.png" alt="Logo Angular" class="habilidades__icono" />
            <p class="habilidades__texto">Angular 18</p>
          </div>
          <div class="habilidades__item">
            <img src="./assets/images/net.png" alt="Logo Net" class="habilidades__icono" />
            <p class="habilidades__texto">.Net 7</p>
          </div>
          <div class="habilidades__item">
            <img src="./assets/images/cplusplus.png" alt="Logo C++" class="habilidades__icono" />
            <p class="habilidades__texto">C++</p>
          </div>
          <div class="habilidades__item">
            <img src="./assets/images/py.png" alt="Logo Python" class="habilidades__icono" />
            <p class="habilidades__texto">Python</p>
          </div>
        </div>
      </section>

`
;
class InicioPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("inicio-page", InicioPage);