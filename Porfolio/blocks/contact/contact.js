const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/contact/contact.css">
    <navbar-page></navbar-page>

    <section id="contact" class="contact">
        <h2 class="contact__titulo">Contáctame</h2>
        <div class="contact__contenido">
            <p class="contact__descripcion">Si tienes alguna pregunta o quieres colaborar en un proyecto, no dudes en contactarme.</p>
            <form class="contact__formulario">
                <label for="nombre" class="contact__label">Nombre:</label>
                <input type="text" id="nombre" class="contact__input" required>
                <label for="email" class="contact__label">Email:</label>
                <input type="email" id="email" class="contact__input" required>
                <label for="mensaje" class="contact__label">Mensaje:</label>
                <textarea id="mensaje" class="contact__textarea" required></textarea>
                <button type="submit" class="contact__boton">Enviar</button>
            </form>
        </div>
    </section>

    <footer-page></footer-page>
`
;
class ContactPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("contact-page", ContactPage);