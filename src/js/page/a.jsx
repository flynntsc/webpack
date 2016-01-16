import React from 'react';
import ReactDOM from 'react-dom';
import style from './../modules/m1/m1.css';
import Fn from './../modules/m1/m1.js'
let num = Fn();

/*// way 1 of Code splitting
require.ensure(['./../modules/m2/m2.js'],function(require) {
	let num = require('./../modules/m2/m2.js');
	document.open();
	document.write('<h3>' + num +'</h3>');
	document.close();
});*/

// way 2 of Code splitting
import load from 'bundle!./../modules/m2/m2.js';

load(function(file) {
	document.open();
	document.write('<strong>' + file +'</strong>');
	document.close();
})

ReactDOM.render(
  <h2 className={style.m1}>Hello, world!I am come from a.js = {num}.</h2>,
  document.querySelector('#g-bd')
);