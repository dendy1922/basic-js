const chainMaker = {
  arr: [],
  separator: "~~",
  result: "",

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this;
  },

  removeLink(position) {
    if ((typeof position !== "number") || (position < 0 && position > this.arr.length) || (position !== parseInt(position, 10))) {
      this.arr = []
      this.result = ""
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr = this.arr.reverse()
    return this;
  },

  finishChain() {
    try {
      this.result = this.arr.join(this.separator);
      return this.result;
    }
    finally {
      this.arr = []
      this.result = ""
    }
  }
};
// console.log(chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(true).finishChain())

module.exports = chainMaker;