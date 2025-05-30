export class Command {
  execute() {
    throw new Error("Por implementar el método execute");
  }
}

export class AddItemCommand extends Command {
  constructor(itemList, itemValue) {
    super();
    this.itemList = itemList;
    this.itemValue = itemValue;
  }

  execute() {
    if (this.itemValue.trim()) {
      this.itemList.addItem(this.itemValue.trim());
    }
  }
}


export class FocusInputCommand extends Command {
  constructor(inputElement) {
    super();
    this.inputElement = inputElement;
  }

  execute() {
    this.inputElement.focus();
  }
}

export class CommandInvoker {
  execute(command) {
    command.execute();
  }
}