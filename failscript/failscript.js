import { $, createLines, removeSpaces, prepDownload } from '../shared.js';

function init() {
  window.download = download;
  $('#filename').value = 'test';

  $('#string-input').value = `Failing scenarios:
  features/eventinfo_read.feature:37  Read EventInfo -- @1.1 
  features/eventinfo_read.feature:47  Read EventInfo, event id filter -- @1.1 
  features/eventinfo_read.feature:48  Read EventInfo, event id filter -- @1.2 
  features/eventinfo_read.feature:70  Read EventInfo by event id -- @1.1 
  features/eventinfo_read.feature:71  Read EventInfo by event id -- @1.2 
  features/eventinfo_readPermission.feature:53  Read EventInfo -- @1.2 
  features/eventinfo_readPermission.feature:54  Read EventInfo -- @1.3 
  features/eventinfo_readPermission.feature:56  Read EventInfo -- @1.5 
  features/eventinfo_readPermission.feature:57  Read EventInfo -- @1.6 
  features/eventinfo_readPermission.feature:67  Read EventInfo by event id -- @1.2 
  features/eventinfo_readPermission.feature:68  Read EventInfo by event id -- @1.3 
  features/eventinfo_readPermission.feature:70  Read EventInfo by event id -- @1.5 
  features/eventinfo_readPermission.feature:71  Read EventInfo by event id -- @1.6 `
}

function createBehaveScript(text) {
  const shebang = '#!/bin/bash';
  const addPrefix = (text) => `behave --stop ${text}`
  const featureRe = /(features\/.*)\:/;
  const lines = [...new Set(
    createLines(text)
      .map(removeSpaces)
      .filter(_ => featureRe.test(_))
      .map(_ => _.match(featureRe)[1])
  )]
    .map(_ => addPrefix(_))
    .join(' && \\ \n');

  return `${shebang} \n ${lines}`;
}

function download() {
  const script = createBehaveScript($('#string-input').value);
  $('#demo').innerText = script;
  prepDownload(script, '.sh');
}

init();

