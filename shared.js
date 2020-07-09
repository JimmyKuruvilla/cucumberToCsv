export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export function removeSpacesInArr(arr) {
  return arr.map(i => i.replace(/^ +| +$/g, '')).filter(i => i.length > 0)
}

export function removeSpaces(str) {
  return str.replace(/ */g, '')
}

export function createLines(str) {
  return str.split('\n');
}

export function prepDownload(content, ext = '') {
  const downloadEl = $('#download');
  const filename = `${$('#filename').value}${ext}`;
  downloadEl.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
  downloadEl.setAttribute('download', filename);
}