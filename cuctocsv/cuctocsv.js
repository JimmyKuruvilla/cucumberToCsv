import { download, toggleCucumberExample } from './helpers.js';
import { $ } from '../shared.js';

function init() {
  window.toggled = true;
  window.toggleCucumberExample = toggleCucumberExample;
  window.download = download;
  $('#filename').value = 'mycsv';
  toggleCucumberExample();
}

init();