import { likeService } from '../services/LikeService.js';

class LikeButton extends HTMLElement {
  constructor() {
    super();
    this.blogId = this.getAttribute('blog-id');
    this.render();
  }

  connectedCallback() {
    this.addEventListener('click', this.handleLike);
    this.updateLikeCount();
  }

  handleLike = () => {
    const newCount = likeService.toggleLike(this.blogId);
    this.querySelector('.like-count').textContent = newCount;
    this.classList.add('liked');
    setTimeout(() => this.classList.remove('liked'), 300);
  };

  updateLikeCount() {
    const count = likeService.getLikes(this.blogId);
    this.querySelector('.like-count').textContent = count;
  }

  render() {
    this.innerHTML = `
      <button class="like-button">
        <img src="./assets/images/like.png" alt="Me gusta">
        <span class="like-count">0</span>
      </button>
    `;
  }
}

customElements.define('like-button', LikeButton);