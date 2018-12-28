'use strict';

const app = require('app.js');
let writeFile = app.writeFile;
let alterFile = app.alterFile;

// console.log('~~~~~~~~~~~~~~~~~');
const fs = jest.mock('fs');

describe('app module', ()=>{
  it('writeFile writes the correct file', () => {
    // const spy = jest.spyOn(writeFile, 'test.txt');
    // const 
    // expect(spy).toHaveBeenCalled();
    // expect(spy).
  });
});
