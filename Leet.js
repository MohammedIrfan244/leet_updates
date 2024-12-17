var mergeAlternately = function(word1="", word2="") {
    let small=Math.min(word1.length,word2.length)
    let word=""
    for(let i=0;i<small;i++){
        word+=word1[i]
        word+=word2[i]
    }
if(word1.length!==word2.length){
    let big=word1.length>word2.length?word1:word2
    let tail=big.slice(small)
    word+=tail
}
    return word
};

console.log(mergeAlternately("abc","pqrjk"))