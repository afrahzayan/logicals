function sort(list1,list2) {
    
    
   let number = list1.concat(list2).sort((a,b) => a-b)

    return  number

    
}console.log(sort([1,1,4],[1,3,4]));
