import { initBlogEvents } from './services/blogService.js';


globalThis.app = {};

window.addEventListener("DOMContentLoaded", () => {
initBlogEvents();
});
