function addDigit(num) {
    let neww = num.toString()
     let sum = Number(neww[0]) + Number(neww[1])
     
    let sumNew = sum.toString()
    let addDig = Number(sumNew[0]) + Number(sumNew[1])

    return addDig
    
}console.log(addDigit(38));
