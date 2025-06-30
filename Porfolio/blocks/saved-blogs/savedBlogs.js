const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/saved-blogs/savedBlogs.css">
    
    <div class="saved-blogs">
      <h1>Blogs Guardados</h1>
        <input id="itemInput" type="text" placeholder="Buscador" class="saved-blogs__search"/>
        <button id="addBtn" class="saved-blogs__btn">Buscar</button>
      <div id="savedItemsContainer" class="saved-blogs__container-saved></div>
    </div>
`
;
class SavedBlogsPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }  
}

customElements.define("savedblogs-page", SavedBlogsPage);