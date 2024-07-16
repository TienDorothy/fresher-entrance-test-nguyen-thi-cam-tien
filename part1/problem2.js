function isPalindrome(str) {
  const normalizedStr = str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w]/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
const text = "A man, a plan, a canal, Panamá";
const is = isPalindrome(text);
console.log(is); // Output: true