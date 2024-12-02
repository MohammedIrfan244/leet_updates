var isPrefixOfWord = function(sentence="", searchWord="") {
    const wordArr=sentence.split(" ")
    for(let i=0;i<wordArr.length;i++){
        if(wordArr[i].startsWith(searchWord)){
            return i+1
        }
    }
    return -1
};

console.log(isPrefixOfWord("i love eating burger","burg"))