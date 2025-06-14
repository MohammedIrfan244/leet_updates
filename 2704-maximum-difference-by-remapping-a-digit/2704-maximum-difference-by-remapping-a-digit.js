/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let str=num.toString()
    let min=str.replaceAll(str[0],"0")

    for(let i =0;i<str.length;i++){
        if(str[i]!=9){
           str=str.replaceAll(str[i],"9")
            break
        }
    }
    return str-min
};