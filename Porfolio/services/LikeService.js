import Storage from './Storage.js';

class LikeService {
  constructor() {
    this.likes = Storage.load('blogLikes') || {};
  }

  toggleLike(blogId) {
    if (!this.likes[blogId]) {
      this.likes[blogId] = 0;
    }
    this.likes[blogId] += 1;
    Storage.save('blogLikes', this.likes);
    return this.likes[blogId];
  }

  getLikes(blogId) {
    return this.likes[blogId] || 0;
  }
}

export const likeService = new LikeService();