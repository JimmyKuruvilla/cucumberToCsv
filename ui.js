import { $ } from './shared.js';
import { createLines } from './shared.js';
import { CsvOutput } from './csvOutput.js';

function prepDownload(content) {
  const downloadEl = $('#download');
  const filename = `${$('#filename').value}.csv`;
  downloadEl.setAttribute('href', `data:text/plain;charset=utf-8,' ${encodeURIComponent(content)}`);
  downloadEl.setAttribute('download', filename);
}

export function download() {
  const expandRows = $('#expandRows').checked;
  const raw = createLines($('#cucumber').value);
  const csv = new CsvOutput(raw[0], raw.slice(1), expandRows).value;

  $('#csv').innerText = csv;
  prepDownload(csv);
}

export function toggleExample() {
  if (window.toggled) {
    $('#cucumber').innerHTML = `| data_version | event_id                  | mean          | std_dev   | total_exposure | rate                         |
| 16.0         | 2847001, 2847004, 2847007 | 100, 101, 102 | 0, 51, 52 | -200, 201, 202 | 1.00E-10, 1.00E-10, 1.00E-10 |`
  }
  else {
    $('#cucumber').innerHTML = `| event_id | mean_value | stddev_value | max_value | rate     | peril | region | data_version | error            |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | XXXX  | NA     | 16.0         | Parse error on line 2. TypeError: invalid peril  |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | WS    | XXXX   | 16.0         | Parse error on line 2. TypeError: invalid region |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | X     | NA     | 16.0         | Parse error on line 2. TypeError: invalid peril  |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | WS    | X      | 16.0         | Parse error on line 2. TypeError: invalid region |`
  }
  window.toggled = !window.toggled;
}