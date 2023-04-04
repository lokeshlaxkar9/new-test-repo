let arr = [1,2,3,5]   
let n=5;


function MissingNumber(array,n){
    for(let i = 1; i<=n; ){ //                        
        let ans = "Not Found";
        let element = i;                                 
        for(let j=0 ; j<array.length; j++){               
            if(array[j] == i){
                ans = "Found"
                i++
            }
        }
    
        if(ans == "Found"){
            continue;
        }
        else{
            return i;
            //console.log(i)
        }
    
    }


}

console.log(MissingNumber(arr, n))
    




