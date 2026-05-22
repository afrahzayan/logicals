var areaOfMaxDiagonal = function(dimensions) {
    let sqrt = 0
    let number = 0
    for(let i = 0; i< dimensions.length; i++){
        let l = dimensions[i][0];
        let w = dimensions[i][1];

        let d = l*l + w*w
        let a = l*w

        if(d > sqrt || (d === sqrt && a > number)){
            sqrt = d
            number = a
        }
}
return number
}
console.log(areaOfMaxDiagonal([[9,3],[8,6]]))
console.log(areaOfMaxDiagonal([[9,3],[8,6]]))
