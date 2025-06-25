const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/habilidades/habilidades.css">

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
class HabilidadesPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("habilidades-page", HabilidadesPage);