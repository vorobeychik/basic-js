module.exports = class DepthCalculator {

    calculateDepth(arr,depth = 1, depthNumber = []) {
        depthNumber.push(depth);
        arr.forEach(elem => {


            if( Array.isArray(elem)){
                this.calculateDepth(elem, depth + 1,depthNumber)
            }

        });
        return depthNumber.reduce( (previousValue,currentValue) =>  previousValue > currentValue ? previousValue:currentValue)

    }
};