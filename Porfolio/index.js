import Router from './services/routerService.js';
import { initBlogEvents } from './services/blogService.js';


globalThis.app = {};

window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    initBlogEvents();
});
