import { initBlogEvents } from './services/blogService.js';
import {savedLikes, saveBlog} from './services/Storage.js';
import { SavedItemUI } from './services/SavedItemUI.js';
import { SavedItemList } from './services/savedItemList.js';

const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const savedList = new SavedItemList();
const savedItemUI = new SavedItemUI('savedItemsContainer');

addBtn.addEventListener('click', () => {
    const item = input.value.trim();
    if (item) {
        savedList.addItem(item);
        input.value = '';
    }
});

globalThis.app = {};
app.savedLikes = savedLikes;
app.savedBlogs = saveBlog;

window.addEventListener("DOMContentLoaded", () => { 
    const likes = app.savedLikes();
    console.log("Likes cargados:", likes);
    app.likes = likes;
    app.saveBlog = saveBlog;

    initBlogEvents();
});


