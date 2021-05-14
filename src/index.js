import './css/style.css';
import imageJpg from './img/problem.png';
(() => {
    console.log('hi');
    const str = 'world';
    const btnClick = document.getElementById('click');
    btnClick.addEventListener('click', () => {
        btnClick.textContent = `hello ${str}`;
    })

    const block = document.createElement('div');
    block.innerHTML = `<img src=${imageJpg}>`;
    document.body.append(block);
})()