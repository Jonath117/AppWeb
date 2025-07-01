const templateSavedBlogs = document.createElement("template");
templateSavedBlogs.innerHTML = `
    <link rel="stylesheet" href="./blocks/saved-blogs/savedBlogs.css">

    <div class="saved-blogs">
        <h1>Blogs Guardados</h1>
        <div class="saved-blogs__search-container">
            <input id="itemInput" type="text" placeholder="Buscar blogs guardados por título..." class="saved-blogs__search"/>
            <button id="searchBtn" class="saved-blogs__btn">Buscar</button>
        </div>
        <div id="savedItemsContainer" class="saved-blogs__container-saved">
            <p id="noSavedBlogsMessage" class="saved-blogs__no-items">No hay blogs guardados aún.</p>
        </div>
    </div>
`;

class SavedBlogsPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(templateSavedBlogs.content.cloneNode(true));
        this.savedItemsContainer = this.shadowRoot.getElementById('savedItemsContainer');
        this.itemInput = this.shadowRoot.getElementById('itemInput');
        this.searchBtn = this.shadowRoot.getElementById('searchBtn');
        this.noSavedBlogsMessage = this.shadowRoot.getElementById('noSavedBlogsMessage');

        this.searchBtn.addEventListener('click', this.filterSavedBlogs.bind(this));
        this.itemInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.filterSavedBlogs();
            }
        });
    }

    connectedCallback() {
        this.renderSavedBlogs();
        window.addEventListener('blogSaved', this.handleBlogSavedEvent.bind(this));
    }

    disconnectedCallback() {
        window.removeEventListener('blogSaved', this.handleBlogSavedEvent.bind(this));
    }

    handleBlogSavedEvent(event) {
        this.renderSavedBlogs();
    }

    renderSavedBlogs(searchTerm = '') {
        const savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]');
        this.savedItemsContainer.innerHTML = '';

        if (savedBlogs.length === 0) {
            this.noSavedBlogsMessage.style.display = 'block';
            return;
        } else {
            this.noSavedBlogsMessage.style.display = 'none';
        }

        const filteredBlogs = savedBlogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredBlogs.length === 0 && searchTerm) {
            this.savedItemsContainer.innerHTML = `<p class="saved-blogs__no-results">No se encontraron resultados para "${searchTerm}".</p>`;
            return;
        } else if (filteredBlogs.length === 0) {
             this.noSavedBlogsMessage.style.display = 'block'; 
             return;
        }


        filteredBlogs.forEach(blog => {
            const blogElement = document.createElement('div');
            blogElement.classList.add('saved-blog-item');
            blogElement.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.content.substring(0, 100)}...</p>
                <button class="remove-saved-blog" data-item-id="${blog.id}">Eliminar</button>
            `;
            this.savedItemsContainer.appendChild(blogElement);
        });

        this.shadowRoot.querySelectorAll('.remove-saved-blog').forEach(button => {
            button.addEventListener('click', this.handleRemoveSavedBlog.bind(this));
        });
    }

    filterSavedBlogs() {
        const searchTerm = this.itemInput.value.trim();
        this.renderSavedBlogs(searchTerm);
    }

    handleRemoveSavedBlog(event) {
        const button = event.currentTarget;
        const itemId = button.dataset.itemId;

        let savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]');
        savedBlogs = savedBlogs.filter(blog => blog.id !== itemId);
        localStorage.setItem('savedBlogs', JSON.stringify(savedBlogs));

        this.renderSavedBlogs(); 
        alert('Blog eliminado de guardados.');

        this.dispatchEvent(new CustomEvent('blogRemoved', {
            detail: { id: itemId },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define("savedblogs-page", SavedBlogsPage);