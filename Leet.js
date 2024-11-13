var isPowerOfTwo = function(n) {
   if(n<=0){
      return false
   }
   let logVal=Math.log2(n)
   return logVal==Math.floor(logVal)
};

console.log(isPowerOfTwo(5))