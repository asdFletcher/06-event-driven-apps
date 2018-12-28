'use strict';
const events = require('./events.js').events;
// console.log({events});
events.on('write-success', writeSuccess);
events.on('read-error', readFileError);
events.on('write-error', writeFileError);

function writeSuccess(file){
  console.log(`File: ${file} sucessfully saved`);
}

function readFileError(err, file){
  console.log(`File: ${file} failed to read, error: ${err}`);
}

function writeFileError(err, file){
  console.log(`File: ${file} failed to write, error: ${err}`);
}

module.exports = {
  writeSuccess, 
  readFileError, 
  writeFileError, 
};

console.log(module.exports);