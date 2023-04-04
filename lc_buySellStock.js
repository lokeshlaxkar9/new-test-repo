let prices = [2,1,4];

let maxProfit = 0;

// for(let i =0; i<prices.length-1;i++){
//     for(let j=i+1; j<prices.length; j++){
//         let profit = prices[j]-prices[i];
//         maxProfit = Math.max(profit, maxProfit);
//     }
// }



let buy = 0;
let sell = 1;

while(sell<prices.length){
    if(prices[buy]< prices[sell]){
        let profit = prices[sell] - prices[buy]
        maxProfit = Math.max(profit, maxProfit);
    }
    else{
        buy = sell;

    }
    sell++;
}
console.log(maxProfit)
