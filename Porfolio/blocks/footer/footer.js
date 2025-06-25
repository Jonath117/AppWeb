const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/footer/footer.css">

    <footer class="footer">
        <div class="footer__content">
          <div class="footer__social">
            <h3 class="footer__social-heading">Redes sociales</h3>
            <ul class="footer__list">
              <li class="footer__list-item">
                <a href="#" class="footer__social-link"
                  ><img
                    src="./assets/svg/facebook.svg"
                    alt="Logo Facebook"
                    class="footer__social-icon"
                  />
                  Facebook</a
                >
              </li>
              <li class="footer__list-item">
                <img
                  src="./assets/svg/ign.svg"
                  alt="Logo Instagram"
                  class="footer__social-icon"
                />
                <a href="#" class="footer__social-link"> Instagram</a>
              </li>
              <li class="footer__list-item">
                <img
                  src="./assets/svg/linkedin.svg"
                  alt="Logo Instagram"
                  class="footer__social-icon"
                />
                <a href="#" class="footer__social-link"> Linkedin</a>
              </li>
              <li class="footer__list-item">
                <img
                  src="./assets/svg/git.svg"
                  alt="Logo Instagram"
                  class="footer__social-icon"
                />
                <a href="#" class="footer__social-link"> Github</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
`
;
class FooterPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("footer-page", FooterPage);