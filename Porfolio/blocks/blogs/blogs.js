const templateBlogs = document.createElement("template");
templateBlogs.innerHTML = `
    <link rel="stylesheet" href="./blocks/blogs/blogs.css">
    <navbar-page></navbar-page>

    <section id="blog" class="blogs">
        <h2 class="blogs__titulo">Blog</h2>
        <div class="blog-posts">

            <article class="blog-post" data-blog-id="post1">
                <div class="blog-post__imagen">
                    <img src="./assets/images/articulo.png" alt="Imagen del post" />
                </div>
                <div class="blog-post__contenido">
                    <h3 class="blog-post__titulo">Título del Post 1</h3>
                    <p class="blog-post__fecha">15 mayo, 2025</p>
                    <p class="blog-post__descripcion">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div class="blog-post__stats">
                        <div class="blog-post__likes">
                            <button class="like-button">
                                <img src="./assets/images/like.png" alt="Like Icon" class="icon-like"/>
                                <span class="like-count">0</span>
                            </button>
                        </div>
                        <div class="blog-post__save">
                            <button
                                data-item-id="save-id1"
                                data-item-title="Título del Post 1"
                                data-item-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                class="blog-post__save-btn"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                    <a href="#" class="blog-post__enlace">Leer más →</a>
                </div>
            </article>

            <article class="blog-post" data-blog-id="post2">
                <div class="blog-post__imagen">
                    <img src="./assets/images/articulo.png" alt="Imagen del post" />
                </div>
                <div class="blog-post__contenido">
                    <h3 class="blog-post__titulo">Título del Post 2</h3>
                    <p class="blog-post__fecha">15 mayo, 2025</p>
                    <p class="blog-post__descripcion">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div class="blog-post__stats">
                        <div class="blog-post__likes">
                            <button class="like-button">
                                <img src="./assets/images/like.png" alt="Like Icon" class="icon-like"/>
                                <span class="like-count">0</span>
                            </button>
                        </div>
                        <div class="blog-post__save">
                            <button
                                data-item-id="save-id2"
                                data-item-title="Título del Post 2"
                                data-item-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                class="blog-post__save-btn"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                    <a href="#" class="blog-post__enlace">Leer más →</a>
                </div>
            </article>

            <article class="blog-post" data-blog-id="post3">
                <div class="blog-post__imagen">
                    <img src="./assets/images/articulo.png" alt="Imagen del post" />
                </div>
                <div class="blog-post__contenido">
                    <h3 class="blog-post__titulo">Título del Post 3</h3>
                    <p class="blog-post__fecha">15 mayo, 2025</p>
                    <p class="blog-post__descripcion">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div class="blog-post__stats">
                        <div class="blog-post__likes">
                            <button class="like-button">
                                <img src="./assets/images/like.png" alt="Like Icon" class="icon-like"/>
                                <span class="like-count">0</span>
                            </button>
                        </div>
                        <div class="blog-post__save">
                            <button
                                data-item-id="save-id3"
                                data-item-title="Título del Post 3"
                                data-item-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                class="blog-post__save-btn"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                    <a href="#" class="blog-post__enlace">Leer más →</a>
                </div>
            </article>
        </div>
    </section>

    <savedblogs-page></savedblogs-page>
    <footer-page></footer-page>
`;

class BlogsPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(templateBlogs.content.cloneNode(true));
        this.shadowRoot.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', this.handleLikeClick.bind(this));
        });
        this.shadowRoot.querySelectorAll('.blog-post__save-btn').forEach(button => {
            button.addEventListener('click', this.handleSaveClick.bind(this));
        });
    }

    connectedCallback() {
        this.loadLikes();
        this.loadSavedBlogsButtonStates();
        window.addEventListener('blogRemoved', this.handleBlogRemovedEvent.bind(this));
    }

    disconnectedCallback() {
        window.removeEventListener('blogRemoved', this.handleBlogRemovedEvent.bind(this));
    }

    handleBlogRemovedEvent(event) {
        const removedItemId = event.detail.id;
        this.shadowRoot.querySelectorAll('.blog-post__save-btn').forEach(button => {
            if (button.dataset.itemId === removedItemId) {
                button.textContent = 'Guardar';
                button.disabled = false;
            }
        });
    }

    loadLikes() {
        this.shadowRoot.querySelectorAll('.blog-post').forEach(post => {
            const blogId = post.dataset.blogId;
            const likeCountSpan = post.querySelector('.like-count');
            const likeButton = post.querySelector('.like-button');

            const totalLikes = parseInt(localStorage.getItem(`likes_total_${blogId}`) || '0', 10);
            likeCountSpan.textContent = totalLikes;

            const userLiked = localStorage.getItem(`user_liked_${blogId}`) === 'true';

            if (userLiked) {
                likeButton.classList.add('liked'); 
            } else {
                likeButton.classList.remove('liked');
            }
        });
    }

    handleLikeClick(event) {
        const button = event.currentTarget;
        const article = button.closest('.blog-post');
        const blogId = article.dataset.blogId;
        const likeCountSpan = button.querySelector('.like-count');

        let totalLikes = parseInt(localStorage.getItem(`likes_total_${blogId}`) || '0', 10);
        let userLiked = localStorage.getItem(`user_liked_${blogId}`) === 'true';

        if (userLiked) {
            totalLikes--;
            button.classList.remove('liked');
            userLiked = false;
        } else {
            totalLikes++;
            button.classList.add('liked');
            userLiked = true;
        }

        likeCountSpan.textContent = totalLikes; 
        localStorage.setItem(`likes_total_${blogId}`, totalLikes.toString()); 
        localStorage.setItem(`user_liked_${blogId}`, userLiked.toString());
    }

    loadSavedBlogsButtonStates() {
        const savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]');
        this.shadowRoot.querySelectorAll('.blog-post__save-btn').forEach(button => {
            const itemId = button.dataset.itemId;
            if (savedBlogs.some(blog => blog.id === itemId)) {
                button.textContent = 'Guardado';
                button.disabled = true;
            } else {
                button.textContent = 'Guardar';
                button.disabled = false;
            }
        });
    }

    handleSaveClick(event) {
        const button = event.currentTarget;
        const itemId = button.dataset.itemId;
        const itemTitle = button.dataset.itemTitle;
        const itemContent = button.dataset.itemContent;

        let savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]');

        if (!savedBlogs.some(blog => blog.id === itemId)) {
            savedBlogs.push({ id: itemId, title: itemTitle, content: itemContent });
            localStorage.setItem('savedBlogs', JSON.stringify(savedBlogs));
            alert(`"${itemTitle}" ha sido guardado.`);
            button.textContent = 'Guardado';
            button.disabled = true;

            this.dispatchEvent(new CustomEvent('blogSaved', {
                detail: { id: itemId, title: itemTitle, content: itemContent },
                bubbles: true,
                composed: true
            }));
        } else {
            alert(`"${itemTitle}" ya está guardado.`);
        }
    }
}

customElements.define("blogs-page", BlogsPage);