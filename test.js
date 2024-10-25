var finalPositionOfSnake = function(n, commands) {
    let result=0
    for(let item of commands){
        item=="RIGHT"?result++:item=="LEFT"?result--:item=="UP"?result-=n:result+=n
    }
    return result
};

console.log(finalPositionOfSnake(3,["DOWN","RIGHT","UP"]));
