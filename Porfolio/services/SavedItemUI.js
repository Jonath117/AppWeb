import { SavedItemList } from './savedItemList.js';

export class SavedItemUI {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.list = new SavedItemList();

    this.list.addEventListener('update', (e) => this.render(e.detail));
    this.render(this.list.getItems());
  }

  render(items) {
    this.container.innerHTML = '';
    if (items.length === 0) {
      this.container.innerHTML = '<p>No hay items guardados</p>';
      return;
    }

    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => this.list.removeItem(item);

      li.appendChild(removeBtn);
      ul.appendChild(li);
    });
    this.container.appendChild(ul);
  }
}
