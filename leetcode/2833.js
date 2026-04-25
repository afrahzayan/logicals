function findsteps(moves) {
    const L =[...moves].filter(a => a === 'L').length
    const R =[...moves].filter(a => a === 'R').length
    const U =[...moves].filter(a => a === '_').length

    return Math.abs(R - L) + U

    
} console.log(
 findsteps("L_RL__R"))