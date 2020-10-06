const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return chainMaker.chain.length;
  },
  addLink(value) {
    chainMaker.chain.push("( " + value + " )");
    return chainMaker;
  },
  removeLink(position) {
    if(typeof(position > chainMaker.getLength() || parseInt(position) !== position || position) !== "number" || position < 1 ){
      chainMaker.chain = [];
      throw new Error();
    }
    chainMaker.chain.splice((position - 1), 1);
    return chainMaker;
  },
  reverseChain() {
    chainMaker.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let finishChain = chainMaker.chain.join("~~");
    chainMaker.chain= [];
    return finishChain;
  }
};

module.exports = chainMaker;
