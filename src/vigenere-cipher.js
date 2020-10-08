const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(inverted = true) {
        this.inverted = inverted;
        this.tabulaRecta = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.position = 0;
    }

    encrypt(string, key) {
      let result = '';
      if (!string || !key){
        throw new Error();
      }

      let msg = string.toUpperCase();
      key = key.toUpperCase();

      while (key.length < msg.length) {
        key += key;
      }

      for (let i = 0, j = 0; i < msg.length; i++ , j++) {
        if (this.tabulaRecta.includes(msg[i])) {
          this.position = this.tabulaRecta.indexOf(msg[i]) + this.tabulaRecta.indexOf(key[j])
            if (this.position >= this.tabulaRecta.length) {
              this.position -= this.tabulaRecta.length;
            }
          result += this.tabulaRecta[this.position];
          } else {
              result += msg[i];
              j--;
            }
      }

      return (this.inverted) ? result : result.split('').reverse().join('')
    };

    decrypt(string, key) {
      let result = '';

      if (!string || !key){
        throw new Error();
      }

      let msg = string.toUpperCase();
      key = key.toUpperCase();

      while (key.length < msg.length) {
        key += key;
      }

      for (let i = 0, j = 0; i < msg.length; i++ , j++) {
        if (this.tabulaRecta.includes(msg[i])) {
          this.position = this.tabulaRecta.indexOf(msg[i]) - this.tabulaRecta.indexOf(key[j])
            if (this.position < 0) {
              this.position += this.tabulaRecta.length;
            }
            result += this.tabulaRecta[this.position];
            } else {
              result += msg[i];
              j--;
            }
      }

      return (this.inverted) ? result : result.split('').reverse().join('')
    };
}

module.exports = VigenereCipheringMachine;
