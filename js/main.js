const a = 1;
console.log(`a = ${a}`);

class Log {
  constructor(item) {
    this.consoleDiv = document.querySelector(item);
    this.hidden = this.show(false);
  }

  show(value) {
    this.hidden = value;
    return value;
  }

  clear() {
    this.consoleDiv.innerHTML = '';
  }

  add(string) {
    this.consoleDiv.innerHTML += string;
  }

  clearadd(string) {
    this.clear();
    this.add(string);
  }
}

const weblog = new Log('.js-message');
weblog.clear();
weblog.add('Hello!');
