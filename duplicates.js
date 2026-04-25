// 
function duplicates(arr) {

  let dupli = []
  let orgi = []

  for(let i = 0 ; i<arr.length ; i++){
    if(orgi.includes(arr[i])){

        if(!dupli.includes[arr[i]]){

            dupli.push(arr[i])
        }
    }else{
        orgi.push(arr[i])
    }
  } return dupli
    
}console.log(duplicates([1,2,3,2,4,3,5,6,4,7,8,9]));