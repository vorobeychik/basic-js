module.exports = function transform(arr) {
    if( !Array.isArray(arr) ) throw new Error('input is not array');
    let newArr = [];
    for(let i = 0;i < arr.length;i++){
        switch (arr[i]) {
            case "--discard-next":
                if(arr[i+1] !== undefined) i++;
                break;
            case  "--discard-prev":
                if(arr[i-1] !== undefined) newArr.pop();
                break;
            case "--double-next":
                if(arr[i+1] !== undefined)  newArr.push(arr[i+1]);
                break;
            case "--double-prev":
                if(arr[i-1] !== undefined)    newArr.push(arr[i-1]);
                break;
            default: newArr.push(arr[i]);
        }
    }
 return newArr
}
