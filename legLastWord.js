function findlastWordLeg(str) {

    let sentence = str.split(" ")
    let lastWord = sentence[sentence.length - 1]
    let number = lastWord.length

    return number

    
}console.log(findlastWordLeg("   hello   world   afrahhhh"));
