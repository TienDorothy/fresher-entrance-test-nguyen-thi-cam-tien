function isPalindrome(str) {
  const normalizedStr = str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w]/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Example
const text = "A man, a plan, a canal, Panamá";
console.log(isPalindrome(text)); // Output: true