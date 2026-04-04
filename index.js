// function generatePassword(length) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }
//     return password;
// }

// const newPassword = generatePassword(12);
// console.log(newPassword);

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allowedChars = "";
    let newPassword = "";

   allowedChars += includeUppercase ? uppercaseChars : "";
   allowedChars += includeLowercase ? lowercaseChars : "";
   allowedChars += includeNumbers ? numbersChars : "";
   allowedChars += includeSymbols ? symbolsChars : "";

   if (length <= 0) {
        return `Password length must be greater than 0.`;
   }
   if (allowedChars.length === 0) {
        return `At least one character type must be included.`;
   }
    for (let i = 0; i < length; i++) {  
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        newPassword += allowedChars[randomIndex];
    }
   
   return newPassword;
}

const passwordLength = 4;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const newPassword = generatePassword(passwordLength,
                                     includeUppercase, 
                                     includeLowercase, 
                                     includeNumbers, 
                                     includeSymbols);

console.log(`Generated Password: ${newPassword}`);