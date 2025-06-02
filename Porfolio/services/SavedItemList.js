import Storage from './Storage.js';
import {likeService} from './LikeService.js';
import { AddObserver } from './Mixin.js';

class SavedItemList {
    static instance;
    items = [];
    observers = [];

    constructor(){
        if(SavedItemList.instance){
            return SavedItemList.instance;
        }

        SavedItemList.instance = this;
        this.items = Storage.load('savedBlogs') || [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(){
        this.observers.forEach(observer => observer.update(this.items));
    }

    addItem(item){
        if(!this.items.some(i => i.id === item.id)){
            item.likes = likeService.getLikes(item.id) || 0;
            this.items.push(item);
            Storage.save('savedBlogs', this.items);
            this.notifyObservers();
        }
    }

    removeItem(id){
        this.items = this.items.filter(item => item.id !== id);
        Storage.save('savedBlogs', this.items);
        this.notifyObservers();
    }

}

export const savedItemList = new SavedItemList();