function digitInteger(n) {
    let digitSum = 0
    let digitProduct=1
    let total=0

    while (n>0) {
        let num = n % 10
        digitSum += num
        digitProduct *= num
        n= Math.floor(n/10)

         
    }
    total = digitProduct - digitSum
    return total

    
}console.log(digitInteger(234));
