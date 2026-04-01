function findpalindrome(str) {
    let reversed = ""
    for(let i = str.length -1; i >= 0 ; i--){
        reversed+=str[i]

    } 
    if(reversed === str){
            return "palindrome"
        }else{
            return "not a plaidrome"
            
        }
   

       
}console.log(findpalindrome("afa"));
