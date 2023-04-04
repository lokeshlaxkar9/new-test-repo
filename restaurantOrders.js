let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let totalOrders = parseInt(readLine());

let totalTables = parseInt(readLine());

let tables = [];          //tableno for order

for(let i = 0; i<totalOrders; i++){
    tables.push(parseInt(readLine()))
}

let bill = [];

for(let i = 0; i<totalOrders; i++){
    bill.push(parseInt(readLine()))
}

// console.log(tables, bill);

let billsByTableNo = [];                           // bills for each table individually [1,2,3,4] 

for(let i = 1; i<=totalTables; i++){
    let tableNo = i;
    let currrentbill = 0;
    for(let j = 0; j<tables.length; j++){
        if(tableNo == tables[j]){
            currrentbill += bill[j]
        }
        if(j == tables.length-1){
            //if(currrentbill > MaxBill){
                // MaxBill = currrentbill; 
                billsByTableNo.push(currrentbill)
           // }
        }
    }
    // console.log(MaxBill)
}


console.log(billsByTableNo)

maxBill =  (Math.max(...billsByTableNo));

for(let i = 0; i<billsByTableNo.length; i++){
    if(billsByTableNo[i] == maxBill){
        console.log(i+1)
    }
}
