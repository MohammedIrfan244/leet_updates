var heightChecker = function(heights) {
  const sorted=heights.toSorted((a,b)=>a-b)
  let result=0
  for(let i=0;i<sorted.length;i++){
      if(heights[i]!==sorted[i]){
          result+=1
      }
  }
  return result
};

console.log(heightChecker([5,1,2,3,4]))
