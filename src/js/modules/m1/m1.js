'use strict';
require('./../../../css/reset.css');
require('./m1.scss');

function create() {
	var div = document.createElement('div'),
		img = document.createElement('img');
	div.setAttribute('class','m1');
	img.src = require('./m1.png');
	div.appendChild(img);
	document.querySelector('#g-ft').appendChild(div);
	return 112;
}
export default create;
