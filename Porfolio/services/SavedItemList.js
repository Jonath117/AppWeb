export class SavedItemList extends EventTarget {
  static instance;

  constructor() {
    super();
    if (SavedItemList.instance) {
      return SavedItemList.instance;
    }
    this.items = [];
    SavedItemList.instance = this;
  }

  addItem(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
      this.dispatchEvent(new CustomEvent('update', { detail: [...this.items] }));
    }
  }

  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
    this.dispatchEvent(new CustomEvent('update', { detail: [...this.items] }));
  }

  getItems() {
    return [...this.items];
  }

  clearAll() {
    this.items = [];
    this.dispatchEvent(new CustomEvent('update', { detail: [] }));
  }
}
