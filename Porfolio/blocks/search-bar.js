class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 200px;
        }
      </style>
      <input type="text" placeholder="Buscar blogs" />
    `;
    this.input = this.shadowRoot.querySelector('input');
    this.setupEvents();
  }

  setupEvents() {
    this.input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.dispatchEvent(new CustomEvent('search', {
          detalles: this.input.value,
          bubbles: true,
          composed: true
        }));
      }
    });
  }

  focus() {
    this.input.focus();
  }
}

customElements.define('search-bar', SearchBar);