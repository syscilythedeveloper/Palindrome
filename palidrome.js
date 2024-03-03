function palindrome(str) {
  return str.toLowerCase() == str.split("").reverse().join("");
}
