'use strict';
require('./../../../css/reset.scss');
require('./m1.css');

var div = document.createElement('div'),
	img = document.createElement('img');
div.setAttribute('class','m1');
img.src = require('./m1.png');
div.appendChild(img);
document.body.appendChild(div);
console.info('m1.js');
export default 11;