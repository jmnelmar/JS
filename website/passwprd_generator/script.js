function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars: "";
    allowedChars += includeSymbols ? symbolsChars: "";

    if(length <= 0){
        return "(password length must be at least 1)";
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i =0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

    
}

const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowerCase,
                                includeUpperCase,
                                includeNumbers,
                                includeSymbols);

console.log(`Generate password: ${password}`)