class SearchCommand {
  constructor(searchTerm) {
    this.searchTerm = searchTerm;
  }
  execute() {
    const foundItem = savedItemList.items.find(item => 
      item.title.includes(this.searchTerm)
    );
    return foundItem;
  }
}
class FocusSearchCommand {
  constructor(searchInput) {
    this.searchInput = searchInput;
  }
  execute() {
    this.searchInput.focus();
  }
}