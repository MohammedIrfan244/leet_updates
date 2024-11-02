var isCircularSentence = function(sentence) {
    let strArr=sentence.split(" ")
    if (strArr.length ===1){
        return sentence[0]===sentence[sentence.length-1];
    }
    
    for (let i=0;i<strArr.length-1;i++){
        if (strArr[i][strArr[i].length-1]!==strArr[i+1][0]){
            return false;
        }
    }
    return strArr[strArr.length-1][strArr[strArr.length-1].length-1]===strArr[0][0];
};

console.log(isCircularSentence("a a ba"));
