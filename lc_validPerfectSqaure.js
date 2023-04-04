var isPerfectSquare = function(num) {
    let i = 1;
    flag = false;

while((i * i) <= num){
    if(i * i == num){
        flag = true;
        break;
    }

    else{
        i++;
    }
}

return flag;
    
};