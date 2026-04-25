function moves(moves) {
    for( let move of moves){
        if(move === 'u') y++; 
        else if(move === 'D') y--;
        else if (move === 'L') x--;
        else if (move === 'r')x++;
    }
    return x==0 && y==0
}console.log(moves());
