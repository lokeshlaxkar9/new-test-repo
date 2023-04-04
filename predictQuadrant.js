let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//Taking inputs
let totalCases = parseInt(readLine());
let testCase;
let xCoordinate;
let yCoordinate;

for (let i=0; i < totalCases; i++) {
	  testCase = readLine();
	  xCoordinate = parseInt(testCase.split(" ")[0]);
	  yCoordinate = parseInt(testCase.split(" ")[1]);

	 if (xCoordinate > 0 && yCoordinate > 0){
		 console.log("Q1");
	 }
	 else if (xCoordinate < 0 & yCoordinate > 0){
		 console.log("Q2");
	 } 
	 else if (xCoordinate < 0 && yCoordinate < 0){
		console.log("Q3");
	}
	else if (xCoordinate > 0 && yCoordinate < 0){
		console.log("Q4");
	}
}
