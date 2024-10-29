let arr=[1,2,2,2,2,1,1,1,1,3,5,5,5,5]

function single(arr=[]){
   for (let i=0;i<arr.length;i++){
      if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
         return arr[i]
      }
   }
}

console.log(single(arr));
