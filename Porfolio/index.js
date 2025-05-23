import { Router } from "./services/Router.js";
import { initBlogEvents } from './services/blogService.js';

initBlogEvents(
    document.querySelector('.blog')
);

globalThis.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
