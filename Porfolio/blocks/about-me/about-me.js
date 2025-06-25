const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/about-me/about-me.css">

        <section>
          hola soy un about me
        </section>
`
;
class AboutPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("about-page", AboutPage);