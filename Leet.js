var isIsomorphic = function(s="", t="") {
    let sArr=s.split("")
    let tArr=t.split("")
   let sStr= sArr.map((item,_,arr)=>arr.lastIndexOf(item)).join("")
   let tStr= tArr.map((item,_,arr)=>arr.lastIndexOf(item)).join("")
   return sStr==tStr
};

console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyzva","abcdefghijklmnopqrstuvwxyzck"));
