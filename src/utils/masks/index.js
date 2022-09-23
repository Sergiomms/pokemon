
export function toUpperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toLowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function toLowerCaseAllLetters(string) {
  return string.toLowerCase();
}