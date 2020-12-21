// import _ from 'lodash';
// function component() {
//     var element = document.createElement('div');

//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
//   }

//   document.body.appendChild(component());

// 运行指令
// webpack ./src/index.js -o ./build/main.js --mode=development
import './assets/css/base.css';
import './assets/css/common.less';
import './assets/font/iconfont.css';
import aaaa from './aa';

function add1(x, y) {
  return x + y;
}
console.log(add1(2, 8));
console.log(aaaa(1, 2));
