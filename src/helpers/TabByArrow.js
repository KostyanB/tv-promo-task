export default class TabByArrow {
  direct;

  constructor(list) {
    this.elems = [...list].sort((a, b) => +a.dataset.tab - b.dataset.tab);
    this.count = this.elems.length - 1;
    this.index = 0;
    this.prevElem = this.elems[this.count];
    this.nextElem = this.elems[0];
  }

  setIndex(elem) {
    if (this.elems.includes(elem)) this.index = this.elems.indexOf(elem);
  }

  incrementIndex() {
    this.index = this.index < this.count ? this.index + 1 : 0;
  }

  decrementIndex() {
    this.index = this.index > 0 ? this.index - 1 : this.count;
  }

  setNextElem() {
    this.nextElem = this.elems[this.index];
    this.prevElem = this.elems[this.index - 1] || this.elems[this.count];
    this.incrementIndex();
  }

  setPrevElem = () => {
    this.nextElem = this.elems[this.index - 1] || this.elems[this.count];
    this.prevElem = this.elems[this.index];
    this.decrementIndex();
  };

  setFocus = () => {
    this.nextElem.focus();
    this.prevElem.blur();
  };

  checkDirect(up) {
    if (this.direct === undefined) {
      this.direct = up ? 'prew' : 'next';
    }
  }

  handleFocus = arrow => {
    const indexDown = arrow === 'ArrowDown' || arrow === 'ArrowRight';
    const indexUp = arrow === 'ArrowUp' || arrow === 'ArrowLeft';
    this.checkDirect(indexUp);

    if (indexDown) {
      if (this.direct === 'prev') {
        this.direct = 'next';
        this.setNextElem();
      }
      this.setNextElem();
    } else if (indexUp) {
      if (this.direct === 'next') {
        this.direct = 'prev';
        this.setPrevElem();
      }
      this.setPrevElem();
    }

    this.setFocus();
  };
}
