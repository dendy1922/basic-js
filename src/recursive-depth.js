class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this)
  }
  calculateDepth(arr) {
    let maxDeep = 0;

    if (Array.isArray(arr)) // object or array 
      for (let item in arr) {
        let deep = this.calculateDepth(arr[item]);
        if (deep > maxDeep)
          maxDeep = deep;
      }
    return maxDeep + 1;
  }
}

const depthCalc = new DepthCalculator();
const { calculateDepth } = depthCalc;
console.log(calculateDepth([[]]))