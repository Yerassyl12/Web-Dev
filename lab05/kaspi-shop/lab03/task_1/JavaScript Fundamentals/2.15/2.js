let a=prompt('Enter your number...');
if(+a>0){
    let b=prompt('Enter your degree...');
    pow(a,b);
} else {
    alert('please, enter number ');
}

function pow(a,b){
    alert(a**b);
}