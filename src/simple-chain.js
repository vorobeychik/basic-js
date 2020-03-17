const chainMaker = {
  chain: [],
  getLength() {

    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value);
    return this

    
  },
  removeLink(position) {
    if(this.chain[position] === undefined){ throw new Error('Error')}
    this.chain.splice(position - 1,1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
     let finalChain = '';
     this.chain.map( (elem,i) => {
       if( i > 0){
         finalChain += `~~( ${elem} )`
       }else{
         finalChain += `( ${elem} )`
       }
         }
     )

    return finalChain
  }
};

module.exports = chainMaker;
