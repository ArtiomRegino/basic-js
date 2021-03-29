const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push('( )');
    }
    else {
      this.chain.push(`${value}`);
    }

    return this;
  },
  removeLink(position) {
    let index = position - 1;
    if (typeof(index) == 'number' && (index > -1 && index < this.getLength())) {
      this.chain.splice(index, 1);
    }
    else {
      this.chain = [];
      throw Error('Shame on u!');
    }

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    let result = ''; 
    this.chain.forEach(val => result += `${result.length > 0 ? '~~' : ''}( ${val} )`);
    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
