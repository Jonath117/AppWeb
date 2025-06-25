const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./blocks/blogs/blogs.css">

    <section id="blog" class="blogs">
          <h2 class="blogs__titulo">Blog</h2>
          <div class="blog-posts">
            <article class="blog-post">
              <div class="blog-post__imagen">
                <img src="./assets/images/articulo.png" alt="Imagen del post" />
              </div>
              <div class="blog-post__contenido">
                <h3 class="blog-post__titulo">Título del Post 1</h3>
                <p class="blog-post__fecha">15 mayo, 2025</p>
                <p class="blog-post__descripcion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="blog-post__stats">
                  <div class="blog-post__likes">
                    <like-button blog-id="unique-blog-id-1"></like-button>
                  </div>
                  <div class="blog-post__save">
                    <save-button 
                      item-id="unique-blog-id-1" 
                      item-title="Título del Post 1" 
                      item-content="Lorem ipsum dolor sit amet...">
                    </save-button>
                  </div>
                </div> 
                <a href="#" class="blog-post__enlace">Leer más →</a>
              </div>
            </article>

            <article class="blog-post">
              <div class="blog-post__imagen">
                <img src="./assets/images/articulo.png" alt="Imagen del post" />
              </div>
              <div class="blog-post__contenido">
                <h3 class="blog-post__titulo">Título del Post 3</h3>
                <p class="blog-post__fecha">15 mayo, 2025</p>
                <p class="blog-post__descripcion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="blog-post__stats">
                  <div class="blog-post__likes">
                    <like-button blog-id="unique-blog-id-2"></like-button>
                  </div>
                  <div class="blog-post__save">
                    <save-button 
                      item-id="unique-blog-id-2" 
                      item-title="Título del Post 2" 
                      item-content="Lorem ipsum dolor sit amet">
                    </save-button>
                  </div>
                </div> 
                <a href="#" class="blog-post__enlace">Leer más →</a>
              </div>
            </article>

            <article class="blog-post">
              <div class="blog-post__imagen">
                <img src="./assets/images/articulo.png" alt="Imagen del post" />
              </div>
              <div class="blog-post__contenido">
                <h3 class="blog-post__titulo">Título del Post 1</h3>
                <p class="blog-post__fecha">15 mayo, 2025</p>
                <p class="blog-post__descripcion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="blog-post__stats">
                  <div class="blog-post__likes">
                    <like-button blog-id="unique-blog-id-3"></like-button>
                  </div>
                  <div class="blog-post__save">
                    <save-button 
                      item-id="unique-blog-id-3" 
                      item-title="Título del Post 3" 
                      item-content="Lorem ipsum dolor sit amet...">
                    </save-button>
                  </div>
                </div> 
                <a href="#" class="blog-post__enlace">Leer más →</a>
              </div>
            </article>
          </div>
        </section>   
`
;
class BlogsPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define("blogs-page", BlogsPage);