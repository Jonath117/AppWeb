export const SaveStateMixin = (BaseClass) => class extends BaseClass {
  checkSavedStatus() {
    this.isSaved = window.savedItemList?.items?.some(item => item.id === this.itemId) || false;
    this.render();
  }

  toggleSave() {
    const item = {
      id: this.itemId,
      title: this.getAttribute('item-title'),
      content: this.getAttribute('item-content'),
      type: 'blog'
    };
    
    if (this.isSaved) {
      window.savedItemList.removeItem(item.id);
    } else {
      window.savedItemList.addItem(item);
    }
    this.isSaved = !this.isSaved;
  }
};

export const LikeStateMixin = (BaseClass) => class extends BaseClass {
  updateLikeCount() {
    const count = window.likeService?.getLikes(this.blogId) || 0;
    if (this.querySelector('.like-count')) {
      this.querySelector('.like-count').textContent = count;
    }
  }

  handleLike() {
    const newCount = window.likeService.toggleLike(this.blogId);
    this.updateLikeCount();
  }
};
