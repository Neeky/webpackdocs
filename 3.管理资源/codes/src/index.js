import _ from 'lodash';
import './style.css';
import icon from './favicon.ico';
import data from './data.xml';

  function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());

  console.log(data);