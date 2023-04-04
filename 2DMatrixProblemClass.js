let matrix = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
]


function findOne(matrix){
    for(let i = 0 ; i <matrix[0].length; i++ ){
        
        for(let j =0; j<matrix.length; j++){
            
            if(matrix[j][i] == 1){
                console.log(j+1,i+1)
                return (j+1)+" " +(i+1);

            }
        }
    }
    return "No one is there in the matrix"
}

console.log(findOne(matrix));


function findOneNew(matrix){
    row = matrix.length-1;
    column = matrix[0].length-1;
    if(matrix[row][column] == 0){
        return "No Ones in the Mateix";
    }

    for(;;){
        if(matrix[row][column-1]==1){
            column--;
        }
        else if(matrix[row-1][column] == 1){
            row--;
        }
        else{
            return (row+1)+" "+ (column+1)
        }
    }
}
console.log(findOneNew(matrix))
