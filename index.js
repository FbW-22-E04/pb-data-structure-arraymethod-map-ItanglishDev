// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
  const arrayOfString = str.split("")
  const arrayOfStringNew = arrayOfString.map(item, idx) => { arrayOfString.splice(idx, 2, item.toUpperCase) }
  return arrayOfString
  //write your code here
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

//write your code here

/*   usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ] */

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
