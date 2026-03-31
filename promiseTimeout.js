function timer(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve,millis)
    })
   }
    timer(5000).then(() => {
        console.log("runs in two sec");
        
    })
