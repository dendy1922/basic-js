module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    let deep = 1;

    arr = arr.filter((item) => Array.isArray(item));
    if (arr.length > 0) {
      arr = arr.flat();
      deep += this.calculateDepth(arr);
    }
    return deep;
  }
}



