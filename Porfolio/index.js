import { initBlogEvents } from './services/blogService.js';
import {savedLikes, saveBlog} from './services/Storage.js';

globalThis.app = {};
app.savedLikes = savedLikes;
app.savedBlogs = saveBlog;

window.addEventListener("DOMContentLoaded", () => { 
    const likes = app.savedLikes();
    console.log("Likes loaded:", likes);
    app.likes = likes;
    app.saveBlog = saveBlog;

    initBlogEvents();
});
