'use strict';
require('./../../../css/reset.scss');
require('./m1.css');

function create() {
	var div = document.createElement('div'),
		img = document.createElement('img');
	div.setAttribute('class','m1');
	img.src = require('./m1.png');
	div.appendChild(img);
	document.querySelector('#g-ft').appendChild(div);
	return 100;
}
export default create;
