let arr = [1,2,3,7,5]
let n = arr.length
let s = 12;
let arrlist =[];

for(let i=0; i<n; i++){
    let add = 0;
    let item = arr[i]
    for(let j=i; j<n; j++){
        add+=arr[j]
        if(add<= s){
            if(add == s){
                arrlist.push(i+1,j+1)
                break;
            }

        }
        else{
            break;
        }

    }
    if(arrlist.length != 0){
        break;
    }
}

if(arrlist.length == 0){
    arrlist.push(-1)
}

else{
    arrlist
}

console.log(arrlist)