export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export function removeSpaces(arr) {
  return arr.map(i => i.replace(/^ +| +$/g, '')).filter(i => i.length > 0)
}

export function createLines(str) {
  return str.split('\n');
}