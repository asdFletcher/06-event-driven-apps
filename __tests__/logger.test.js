'use strict';

// const events = require('events.js').events;
const logger = require('../logger.js');
console.log(`logger: ${logger}`);
let writeSuccess = logger.writeSuccess;
let readFileError = logger.readFileError;
let writeFileError = logger.writeFileError;

// const app = require('app.js');
// const fs = jest.mock('fs');

// console.log('~~~~~~~~~~~~~~~~~');

describe('logger module', ()=>{
  it('writeSuccess sends the correct message', ()=>{
    console.log = jest.fn();
    let file = 'test1.txt';
    writeSuccess(file);
    let expected = `File: ${file} sucessfully saved`;
    expect(console.log.mock.calls[0][0]).toEqual(expected);
  });

  it('readFileError sends the correct message', ()=>{
    console.log = jest.fn();
    let file = 'test1.txt';
    let err = 'error message';
    readFileError(err, file);
    let expected = `File: ${file} failed to read, error: ${err}`;
    expect(console.log.mock.calls[0][0]).toEqual(expected);
  });

  it('writeFileError sends the correct message', ()=>{
    console.log = jest.fn();
    let file = 'test1.txt';
    let err = 'error message';
    writeFileError(err, file);
    let expected = `File: ${file} failed to write, error: ${err}`;
    
    expect(console.log.mock.calls[0][0]).toEqual(expected);
  });

});
