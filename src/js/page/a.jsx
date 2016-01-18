import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Fn from './../modules/m1/m1.js';
import style from './../modules/m1/m1.scss';
let num = Fn();

/*// way 1 of Code splitting
require.ensure(['./../modules/m2/m2.js'],function(require) {
	let file = require('./../modules/m2/m2.js');
	$('#g-ft').append('jquery插入内容：' + file);
});*/

// way 2 of Code splitting
import load from 'bundle!./../modules/m2/m2.js';

load(function(file) {
	$('#g-ft').append('jquery插入内容：' + file);
})

ReactDOM.render(
  <h2 className={style.m1}>Hello, world!I am come from a.js = {num}.</h2>,
  document.querySelector('#g-bd')
);