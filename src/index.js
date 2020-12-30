import './index.scss';

const change = (msg) => {
  document.querySelector('body').innerText = msg;
};

document.querySelector('body').innerText = 'Hello, World!';

setTimeout(() => {
  change('Deferred hello world!');
}, 3000);
