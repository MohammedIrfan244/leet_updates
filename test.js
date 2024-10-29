let arr=[-1,0]

function single(arr=[]){
   let result=[]
   for (let i=0;i<arr.length;i++){
      if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
         result.push(arr[i])
      }
   }
   return result
}

console.log(single(arr));
