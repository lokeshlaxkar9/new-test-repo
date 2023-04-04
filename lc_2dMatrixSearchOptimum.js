let matrix = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]

let target = 99;

function findValue(matrix){
    let row = 0;                        
    let column = matrix[0].length-1;     // Starting from the first row last element

    while(row<=matrix.length-1 && column >=0){
        if(matrix[row][column] == target){     
            return true;
        } 
        else if(matrix[row][column] < target){  // if target is larger increase row number
            row++
        }
        else{                                   // if target is smaller decrese column ;
            column--;
        }
    }
    return false;                                 // value not found
}

console.log(findValue(matrix))