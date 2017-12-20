import _ from 'Lodash';
import './style.css';
import Icon from './candy.png';
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello你好', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
