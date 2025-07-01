const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/about-me/about-me.css">

    <navbar-page></navbar-page>
        <section class="about-me">
          <h1>Sobre mí</h1>
            <p>Hola, soy Jonathan, un estudiante de ingeniería en sistemas computacionales con una gran pasión por la programación y el desarrollo web. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.</p>
            <p>En este portafolio, encontrarás una colección de mis proyectos y trabajos más destacados. Cada uno de ellos refleja mi dedicación y esfuerzo por crear soluciones innovadoras y funcionales.</p>
            <p>Estoy siempre abierto a nuevas oportunidades y desafíos, así que si estás interesado en
            colaborar o simplemente quieres charlar sobre tecnología, no dudes en contactarme.</p>
            <p>Gracias por visitar mi portafolio. Espero que disfrutes explorando mis proyectos tanto como yo disfruté creándolos.</p>
            <p>¡Saludos!</p>
            <p>Jonathan</p>

        </section>

    <footer-page></footer-page>
`
;
class AboutPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("about-page", AboutPage);