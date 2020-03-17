function calculateDepth(arr,depth = 1, depthNumber = []) {
    depthNumber.push(depth);
    arr.forEach(elem => {


        if( Array.isArray(elem)){
            calculateDepth(elem, depth + 1,depthNumber)
        }

    });
   return depthNumber.reduce( (previousValue,currentValue) =>  previousValue > currentValue ? previousValue:currentValue)

}
let arr = [12,[12,[12]],[]];
console.log(calculateDepth(arr))