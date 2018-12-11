const a = 1;
console.log(`a = ${a}`);

class ScreenConsole {
  constructor(item) {
    this.item = document.querySelector(item);
    this.show();
    this.log('Console started.\n');
  }

  log(string) {
    this.item.innerHTML += string;
  }

  hide() {
    this.item.classList.add('hidden');
  }

  show() {
    this.item.classList.remove('hidden');
  }

  clear() {
    this.item.innerHTML = '';
    this.log('Console clear.\n');
  }
}

const miniconsole = new ScreenConsole('div.console');
miniconsole.log('Hi!');

class StickyHeader {
  constructor(item, state, position) {
    miniconsole.log('Header initialization...');
    this.item = document.querySelector(item);
    this.sticky = this.stick(state);
    this.position = position;
    this.addScrollHandler(this);
    miniconsole.log('done\n');
    miniconsole.log(`offsetHeight: ${this.item.offsetHeight}\n`);
  }

  addScrollHandler(e) {
    window.addEventListener('scroll', () => {
      e.check();
    });
  }

  stick(state) {
    if (this.sticky !== state) {
      miniconsole.log(`\n${this.sticky ? 'true' : 'false'} -> `);
      if (state === true) {
        this.item.classList.add('sticky');
        miniconsole.log('true\n');
        this.sticky = true;
        return true;
      }
      this.item.classList.remove('sticky');
      miniconsole.log('false\n');
      this.sticky = false;
      return false;
    } return state;
  }

  check() {
    miniconsole.log('.');
    //      miniconsole.log(window.pageYOffset + ':' + this.position + '\n' );
    this.stick(window.pageYOffset > this.position);
  }
}

const header = new StickyHeader('header', false, 100);

miniconsole.log('Hello!\n');
console.log('Test');
