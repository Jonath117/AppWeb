import Storage from './Storage.js';
import { likeService } from './LikeService.js';

class SavedItemList {
  static instance;
  items = [];
  observers = [];

  constructor() {
    if (SavedItemList.instance) {
      return SavedItemList.instance;
    }
    SavedItemList.instance = this;
    this.items = Storage.load('savedBlogs') || [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.items));
  }

  addItem(item) {
    if (!this.items.some(i => i.id === item.id)) {
      item.likes = likeService.getLikes(item.id) || 0;
      this.items.push(item);
      Storage.save('savedBlogs', this.items);
      this.notifyObservers();
    }
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
    Storage.save('savedBlogs', this.items);
    this.notifyObservers();
  }

  search(term) {
    return this.items.filter(item => 
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.content.toLowerCase().includes(term.toLowerCase())
    );
  }
}

export const savedItemList = new SavedItemList();