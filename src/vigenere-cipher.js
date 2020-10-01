class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }
  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();

    let temp;
    let count;
    let result = "";
    let counter = 0;

    count = Math.ceil(str.length / key.length);
    key = key.repeat(count);

    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        result += " "
      }

      else if (str[i].match(/[a-z]/i)) {
        temp = (str[i].charCodeAt() + key[counter].charCodeAt()) % 26
        result += String.fromCharCode(temp + 65);
        counter++;
      }

      else {
        result += str[i];
      }
    }

    if (!this.type) {
      result = result.split("").reverse().join("");
    }
    return result
  }
  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();

    let temp;
    let result = "";
    let counter = 0;
    let count = Math.ceil(str.length / key.length);
    let part;

    key = key.repeat(count);

    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        result += " "
      }
      else if (str[i].match(/[a-z]/i)) {
        part = (str[i].charCodeAt() - key[counter].charCodeAt())
        temp = ((part >= 0) ? part : part + 26);
        result += String.fromCharCode(temp + 65);
        counter++;
      }
      else {
        result += str[i];
      }
    }

    if (!this.type) {
      result = result.split("").reverse().join("");
    }
    return result
  }
}


module.exports = VigenereCipheringMachine;
