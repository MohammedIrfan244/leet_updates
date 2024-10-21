var checkRecord = function(s) {
    let absents=0
    let lates=0
    for(let i=0;i<s.length;i++){
        if(s[i]=="A"){
            absents++
            if (absents>=2){
                return false
            }
        }
        if(s[i]=="L"){
            lates++
            if(lates>=3){
                return false
            }
        }else{
            lates=0
        }
    }
    return true
};

console.log(checkRecord("PPALLP"));
