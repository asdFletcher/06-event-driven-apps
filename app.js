'use strict';

const fs = require('fs');
const util = require('util');
const events = require('./events.js').events;

require('./logger.js');

let readFileWithPromise = util.promisify(fs.readFile);
let writeFileWithPromise = util.promisify(fs.writeFile);

const alterFile = (file) => {
  readFileWithPromise(file)
    .then((data) => {
      events.emit('write-file', file, data);
    })
    .catch( (err) => {
      events.emit('read-error', err, file);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
events.on('write-file', writeFile);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function writeFile(file,data){
  let text = data.toString().toUpperCase();
  writeFileWithPromise( file, Buffer.from(text) )
    .then( ()=> {
      events.emit('write-success', file);
    })
    .catch( (err) => {
      events.emit('write-error', err, file);
    });
}

module.exports = {
  writeFile,
  alterFile,
};