const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let characters = alphabet;
  hasNumbers ? (characters += numbers) : "";
  hasSymbols ? (characters += symbols) : "";

  //   console.log(characters); //if i just log this i wanna get all of those concatenated
  return generatenodePassword(length, characters);
};

const generatenodePassword = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;
