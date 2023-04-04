const ops = ["1","C"]

let scores = [];

for(let i=0; i<ops.length; i++){
    length = scores.length
    if(ops[i] == "+" ){
        scores.push(scores[length-1] + scores[length-2] );
    }

    else if(ops[i] == "D"){
        scores.push(scores[length-1] * 2);
    }

    else if(ops[i] == "C"){
        scores.pop();
    }

    else{
        scores.push(parseInt(ops[i]))
    }
}

let sumOfScores = 0;

for(let x of scores){
    sumOfScores += x;
}

console.log(sumOfScores);

