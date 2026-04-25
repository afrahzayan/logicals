function sameTree(p,q) {
    if(p[0] === q[0] && p[1] === q[1]){
        return "true"
    }else{
        return "false"
    }
    
}console.log(sameTree([1,2,],[1,null,2]));
