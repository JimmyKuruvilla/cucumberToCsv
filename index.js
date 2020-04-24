
import { createLines } from './shared.js';
import { CsvOutput } from './csvOutput.js';
import { download, toggleExample } from './ui.js';
import { $ } from './shared.js';

function init() {
  window.toggled = true;
  window.toggleExample = toggleExample;
  window.download = download;
  $('#filename').value = 'mycsv';
  toggleExample();
}

init();