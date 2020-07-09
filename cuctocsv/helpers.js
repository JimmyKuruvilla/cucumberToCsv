
import { $, createLines } from '../shared.js';
import { CsvOutput } from './csvOutput.js';
import { prepDownload } from '../shared.js';

export function download() {
  const expandRows = $('#expandRows').checked;
  const raw = createLines($('#string-input').value);
  const csv = new CsvOutput(raw[0], raw.slice(1), expandRows).value;

  $('#demo').innerText = csv;
  prepDownload(csv, '.csv');
}

export function toggleCucumberExample() {
  if (window.toggled) {
    $('#string-input').value = `| data_version | event_id                  | mean          | std_dev   | total_exposure | rate                         |
| 16.0         | 2847001, 2847004, 2847007 | 100, 101, 102 | 0, 51, 52 | -200, 201, 202 | 1.00E-10, 1.00E-10, 1.00E-10 |`
  }
  else {
    $('#string-input').value = `| event_id | mean_value | stddev_value | max_value | rate     | peril | region | data_version | error            |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | XXXX  | NA     | 16.0         | Parse error on line 2. TypeError: invalid peril  |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | WS    | XXXX   | 16.0         | Parse error on line 2. TypeError: invalid region |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | X     | NA     | 16.0         | Parse error on line 2. TypeError: invalid peril  |
    | 2847001  | 100        | 50           | 200       | 1.00E-10 | WS    | X      | 16.0         | Parse error on line 2. TypeError: invalid region |`
  }
  window.toggled = !window.toggled;
}