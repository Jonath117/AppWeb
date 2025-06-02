import Router from './services/routerService.js';

globalThis.DOM = {};
globalThis.app = {};

app.Router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    Router.init();
});
