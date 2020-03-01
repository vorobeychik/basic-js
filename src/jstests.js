function transform(arr) {
    if( !Array.isArray(arr) ) throw new Error('input is not array');

    for(let i = 0;i < arr.length;i++){
        switch (arr[i]) {
            case "--discard-next":
                (arr[i+1] ===undefined) ?  arr.splice(i,1):   arr.splice(i,2);
                break;
            case  "--discard-prev":
                (arr[i-1] === undefined) ? arr.splice(i,1):arr.splice(i-1,2);
                break;
            case "--double-next":
                (arr[i+1] ===undefined) ? arr.splice(i,1):arr.splice(i,1,arr[i+1]);
                break;
            case "--double-prev":
                (arr[i-1] === undefined) ?   arr.splice(i,1): arr.splice(i,1,arr[i-1]);
                break;
        }
        }

    console.log(arr)
        }



console.log([1,"--discard-next", true, 3,4, 5])
transform([1,"--discard-next", 2, 3,4, 5]);
console.log([1,"--discard-prev", 2, 3,4, 5])
transform([1,"--discard-prev", 2, 3,4, 5]);
console.log([1,"--double-prev", 2, 3,4, 5])
transform([1,"12","--double-prev", 2, 3,4, 5]);
console.log([1,"--double-next", 2, 3,4, 5])
transform([1,"--double-next", 2, 3,4, 5]);
