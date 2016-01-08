'use strict';

// import {Mycode} from './component.js';
// import {MyModule} from './modules/MyModule.js';
var Mycode = require('./component.js');
var MyModule = require('./modules/MyModule.js');
var num = Mycode(11);
var txt = document.createElement('h2');
txt.innerHTML = num;
document.body.appendChild(txt);
// class
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}
var point = new Point('flyn','test');
console.info(point.toString())