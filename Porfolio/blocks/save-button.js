import { likeService } from '../services/LikeService.js';
import { savedItemList } from '../services/SavedItemList.js';

class SaveButton extends HTMLElement {
  constructor() {
    super();
    this.itemId = this.getAttribute('item-id');
    this.items = savedItemList?.items || [];
    this.render();
  }

  connectedCallback() {
    this.addEventListener('click', this.toggleSave);
    this.checkSavedStatus();
  }

  checkSavedStatus() {
    this.items = savedItemList?.items || [];
    this.isSaved = this.items.some(item => item.id === this.itemId);
    this.render();
  }

  toggleSave = () => {
    const item = {
      id: this.itemId,
      title: this.getAttribute('item-title'),
      content: this.getAttribute('item-content'),
      type: 'blog',
      likes: likeService.getLikes(this.getAttribute('item-id')) || 0
    };

    if (this.isSaved) {
      savedItemList.removeItem(item.id);
    } else {
      savedItemList.addItem(item);
    }
    
    this.isSaved = !this.isSaved;
    this.render();
  };

  render() {
    this.innerHTML = `
      <button class="${this.isSaved ? 'saved' : ''}">
        <img src="./assets/images/save.png" alt="Guardar">
        <span>${this.isSaved ? 'Guardado' : 'Guardar'}</span>
      </button>
    `;
  }
}

customElements.define('save-button', SaveButton);