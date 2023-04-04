let items = [
    ["phone","blue","pixel"],
    ["computer","silver","phone"],
    ["phone","gold","iphone"]
]

let ruleKey = "type"; 
let ruleValue = "phone";

// let count = 0;

function countItems(items, ruleKey, ruleValue){
    let count = 0;
    if(ruleKey == "type"){
        for(let i =0; i<items.length; i++){
            if(items[i][0] == ruleValue){
                count++
            }
        }
    }

    else if(ruleKey == "color"){
        for(let j =0; j<items.length; j++){
            if(items[j][1] == ruleValue){
                count++
            }
        }
    }

    else if(ruleKey == "name"){
        for(let k =0; k<items.length; k++){
            if(items[k][2] == ruleValue){
                count++
            }
        }
    }
        return count;
}

console.log(countItems(items, ruleKey, ruleValue))