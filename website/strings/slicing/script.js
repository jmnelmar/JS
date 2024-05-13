/*
string slicing: creating a substring from
                a portion of another string
*/

const fullName = "Broseph code";

let firstName = fullName.slice(0,3);

let lastChar = fullName.slice(-4);
console.log(firstName);
console.log(lastChar);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastname = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName + " " + lastname);

const email = "nelson@gmail.com"

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1)

console.log(username);
console.log(extension);