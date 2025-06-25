import { savedItemList } from './services/SavedItemList.js';
import Router from './services/routerService.js';
import { likeService } from './services/LikeService.js';
import SavedItemUi from './services/SavedItemUI.js';
import './blocks/search-bar.js';
import './blocks/save-button.js';
import './blocks/like-button.js';

import './blocks/nav-bar/nav-bar.js';
import './blocks//blogs/blogs.js';
import './blocks/inicio/inicio.js';
import './blocks/projects/projects.js';
import './blocks/about-me/about-me.js';
import './blocks/footer/footer.js';
import './blocks/footer/footer.js';

globalThis.DOM = {};
globalThis.app = {};

app.Router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  Router.init();
});

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

