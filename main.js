// declar a arry and add new items
let TodoLists = [ "iphone", "samsung", "nokia"];

 TodoLists.push("buy groceries");

 console.log(" Add a new items : " + TodoLists);


//  2nd task "clean room " add items beginning of the list.

TodoLists.unshift("clean room");

console.log(TodoLists);

// 3rd task remove the last items..

TodoLists.pop();

console.log(TodoLists);

// 4th task identify the index number of clean room..

let result = TodoLists.indexOf("samsung");

console.log( result);

let removeItem = TodoLists.pop();
console.log(removeItem);

//  5th task counting the text length...

 let currentLength = TodoLists.length 

 console.log( " current lenght of the list : " + currentLength);