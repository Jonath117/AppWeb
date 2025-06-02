export default class BaseHTMLElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

    }

    async loadCSS(path){
        const style = document.createElement("style");;
        const response = await fetch(path);
        if (!response.ok) 
            throw new Error(`Error al cargar el CSS: ${response.statusText}`);
        const cssText = await response.text();
        style.textContent = cssText;
        this.shadowRoot.appendChild(style);
    }

}