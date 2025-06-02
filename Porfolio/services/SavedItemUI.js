import { savedItemList } from './SavedItemList.js';
import { AddObserver } from './Mixin.js';

class SavedItemUi {
  constructor() {
    this.container = document.getElementById('savedItemsContainer');
    if (!this.container) {
      console.error('No se encontro');
      return;
    }
    
    savedItemList.addObserver(this);
    this.update(savedItemList.items || []);
  }

  update(items) {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <h2>Blogs Guardados (${items.length})</h2>
      ${items.length ? items.filter(item => item && item.title).map(item => `
        <div class="saved-item">
          <h3>${item.title}</h3>
          <p>${item.content?.substring(0, 100) || ''}...</p>
          <div class="saved-item-stats">
            <span>❤️ ${item.likes || 0} likes</span>
            <button class="remove-btn" data-id="${item.id}">Eliminar</button>
          </div>
        </div>
      `).join('') : '<p>No hay blogs guardados aún</p>'}
    `;

    if (this.container.querySelectorAll) {
      this.container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          savedItemList.removeItem(e.target.dataset.id);
        });
      });
    }
  }
}

export default SavedItemUi;