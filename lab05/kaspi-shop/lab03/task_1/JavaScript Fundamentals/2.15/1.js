min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function min(a,b){
    if (a>b){
        return b;
    } else{
        return a;
    }
}