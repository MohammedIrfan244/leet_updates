var intersect = function(nums1=[], nums2=[]) {
   let shortArray=nums1.length<=nums2.length?nums1:nums2
   let longArray=nums2.length>=nums1.length?nums2:nums1
   let result=[]
   for(let i=0;i<shortArray.length;i++){
      if(longArray.includes(shortArray[i])){
         result.push(shortArray[i])
         longArray.splice(longArray.indexOf(shortArray[i]),1)
      }
   }
   return result
};


console.log(intersect([4,9,5],[9,4,9,8,4]))