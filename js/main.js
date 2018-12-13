
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
    return this;
  }

  stick(state) {
    if (this.sticky !== state) {
      // miniconsole.log(`\n${this.sticky ? 'true' : 'false'} -> `);
      if (state === true) {
        this.item.classList.add('sticky');
        // miniconsole.log('true\n');
        this.sticky = true;
        return true;
      }
      this.item.classList.remove('sticky');
      // miniconsole.log('false\n');
      this.sticky = false;
      return false;
    } return state;
  }

  check() {
    // miniconsole.log('.');
    // miniconsole.clear('.');
    // miniconsole.log(`${window.pageYOffset}` + '');
    // miniconsole.log(window.pageYOffset + ':' + this.position + '\n' );
    this.stick(window.pageYOffset > this.position);
    return this;
  }
}

class SectionScreens {
  constructor() {
    this.sections = [];
    this.current = 0;
    this.readDOM();
    this.check();
    this.addScrollHandler(this);
  }

  readDOM() {
    this.sections = [];
    Array.from(document.querySelectorAll('section.section_screen')).forEach((e) => {
      this.sections.push({
        id: '',
        link: e.querySelector('a.section_anchor').attributes.name.value,
        offsetTop: e.offsetTop,
        element: e,
      });
      miniconsole.log(e.offsetTop);
      miniconsole.log(', ');
    });
    // console.log(this.sections);
    return this;
  }

  addScrollHandler(e) {
    window.addEventListener('scroll', () => {
      e.check();
    });
    return this;
  }

  check() {
    const position = window.pageYOffset;
    const currentPosition = this.sections.reduce((result, current, index, arr) => {
      if (Math.abs(position - current.offsetTop) < Math.abs(position - arr[result].offsetTop)) {
        return index;
      }
      return result;
    }, 0);

    if (currentPosition !== this.current) {
      this.current = currentPosition;
      this.changed();
    }


    return this;
  }

  changed() {
    miniconsole.log(`screen changed to: ${this.sections[this.current].link} id=${this.current}\n`);
    this.scrollTo(this.current);
    return this;
  }

  scrollTo(index) {
    miniconsole.log(`scrollTo(${this.current}): ${this.sections[this.current].offsetTop}\n\n`);
    this.sections[index].element.scrollIntoView();
    // window.scrollTo(0, this.sections[index].osffsetTop);


    return this;
  }
}

window.onload = () => {
  const header = new StickyHeader('header', false, 50);
  const sections = new SectionScreens('section.section_screen');

  miniconsole.log('\n');

  miniconsole.log('Hello!\n');
  // console.log(sections);
};
