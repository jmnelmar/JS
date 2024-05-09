// string methods = allow you to manipulate and work with text (string)

let userName = " nelson";

console.log(userName.charAt(0));
console.log(userName.indexOf("0"));
console.log(userName.lastIndexOf("n"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(userName.startsWith(" "));
console.log(userName.endsWith("n"));
console.log(userName.includes("l"));

let phoneNumber = "415-960-5959";
console.log(userName.replace("-",""));
console.log(userName.padStart(15,"0"));
console.log(userName.padEnd(15,"0"))

eval(`String.replace(${userName})`)