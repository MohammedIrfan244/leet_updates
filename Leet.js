var reverseWords = function(s="") {
    let arr=s.split(" ").filter(i=>i.trim()!="")
    return arr.reverse().join(" ")
};

console.log(reverseWords("a good   example"))