function divisible(num) {
    let divisible = 0

    for (let i = 1; i < num; i++) {
        let number = i

        if (num % number === 0) {
            divisible += number            
        }
    }
    return divisible === num

}
console.log(divisible(28));
console.log(divisible(7));
console.log(divisible(2016));
