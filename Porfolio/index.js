import { savedItemList } from './services/SavedItemList.js';
import { likeService } from './services/LikeService.js';
import SavedItemUi from './services/SavedItemUI.js';
import './blocks/search-bar.js';
import './blocks/save-button.js';
import './blocks/like-button.js';

new SavedItemUi();

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault();
    const itemInput = document.getElementById('itemInput');
    if (itemInput) {
      itemInput.focus();
    }
  }
});

document.addEventListener('search', (e) => {
  const results = savedItemList.search(e.detail);
  console.log('Resultados de búsqueda:', results);
});