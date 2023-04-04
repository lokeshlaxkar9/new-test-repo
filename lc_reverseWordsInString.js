let xxx = "Let's take LeetCode contest".split(" "); //split the string by spaces and save it in an array
let newLine = "";                    // it will store the result but its gonna have white space which will be removed at the end
for(let i = 0 ; i<xxx.length; i++){   // 1st loop will access each word in that array
    let abc = xxx[i] + " ";             // abc will store the array element plus a space
    for(let j=abc.length-1 ; j >= 0; j-- ){ //2nd loop will just reverse the string abc
        newLine += abc[j];                  //concatenate the string in new line
    }
}
console.log(newLine.trim()) //don't forget to remove the white spaces from both ends.

//......................Task Completed....................//
 