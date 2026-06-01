function number(n) {
    let binary = n.toString(2).split('')
                 .filter(a => a === "1")
                 .length
   
    return binary
    
}console.log(number(11));
