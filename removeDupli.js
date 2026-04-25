function removeDuplicates(arr) {
    let duplicate = []
    let  orginal = []

    for(let i = 0 ; i < arr.length; i++){
        if(orginal.includes(arr[i])){

           duplicate.push(arr[i])            
        } else{
            orginal.push(arr[i])
        }
        
    } return orginal
    
}console.log(removeDuplicates([1,2,3,4,1,5,6,2]));
