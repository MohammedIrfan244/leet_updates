var checkIfExist = function(arr=[]) {
    const doubles=arr.map(i=>Math.floor(i*2))
    for(let i=0;i<arr.length;i++){
        if(doubles.includes(arr[i])&&i!==doubles.indexOf(arr[i])){
            return true
        }
    }
    return false
};

console.log(checkIfExist([3,1,7,11]))