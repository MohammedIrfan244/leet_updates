var pickGifts = function(gifts=[], k=0) {
    for(let i=0;i<k;i++){
        const max=Math.max(...gifts)
        gifts[gifts.indexOf(max)]=Math.floor(Math.sqrt(max))
    }
    return gifts.reduce((a,c)=>a+c,0)
};

console.log(pickGifts([1,1,1,1],4))