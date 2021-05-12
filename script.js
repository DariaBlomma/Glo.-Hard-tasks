'use strict';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// const color = document.getElementById('color');
// const range = document.getElementById('range');
// const rangeText = document.querySelector('.range-text');
// const gradient = ctx.createLinearGradient(20, 20, 120, 120);
// const gradient = ctx.createRadialGradient(70, 70, 0, 70, 70, 70);
// gradient.addColorStop(0, 'hsl(250, 70%, 70%)');
// gradient.addColorStop(1, 'hsl(0, 70%, 70%)');
// ctx.fillStyle = gradient;

// ctx.fillRect(20, 20, 100, 100);
// ctx.strokeStyle = 'rgb(50, 155, 60)';
// ctx.strokeRect(10, 10, 120, 120);

//ctx.clearRect(45, 45, 50, 50);

const angle = (degrees = 360) => (Math.PI / 180) * degrees;
// ctx.beginPath();
// // ctx.moveTo(150, 0);
// // ctx.lineTo(175, 125);
// ctx.moveTo(175, 150); // ксить в центре
// // ctx.arc(150, 150, 25, 0, Math.PI*2, false);
// // ctx.arc(150, 150, 25, 0, angle(180), false);
// ctx.arc(150, 150, 25, 0, angle(), false);
// ctx.moveTo(125, 125);

// ctx.arcTo(150, 100, 175, 125, 30);
// ctx.lineWidth = '2';
// ctx.strokeStyle = 'violet';

// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.bezierCurveTo(200, 0, 200, 200,300, 100);
// ctx.stroke();

// ctx.font = '30px Sans-serif';
// ctx.fillStyle = 'green';
// ctx.shadowOffsetX = 5;
// ctx.shadowOffsetY = 5;
// ctx.shadowBlur = 3;
// ctx.shadowColor = 'red';
// ctx.save();
// ctx.fillText('any text', 50, 50, 200);

// ctx.shadowColor = 'orange';
// ctx.fillStyle = 'blue';
// ctx.rotate(angle(10));
// ctx.fillText('Glo Academy', 200, 50, 200);

// ctx.restore();
// ctx.fillText('Freedom', 124, 150, 200);

// let tick = 0;
// const animation = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = 'green';
//     ctx.fillRect(tick, tick, 50, 50);
//     tick++;
//     if (tick < 350) {
//         requestAnimationFrame(animation);
//     } else {
//         reverse();
//     }

// };

// const reverse = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = 'green';
//     ctx.fillRect(tick, tick, 50, 50);
//     tick--;
//     if (tick > 0) {
//         requestAnimationFrame(reverse);
//     } else {
//         animation();
//     }
// }

// animation();


// paint
// color.addEventListener('input', () => ctx.strokeStyle = color.value);
// range.addEventListener('change', () => {
//     ctx.lineWidth = range.value;
//     rangeText.textContent = range.value;
// });

// canvas.addEventListener('mousemove', event => {
//     const x = event.offsetX;
//     const y = event.offsetY;
//     const mx = event.movementX,
//         my = event.movementY;
//     if (event.buttons > 0) {
//         ctx.beginPath();
//         ctx.moveTo(x, y);
//         ctx.lineTo(x - mx, y - my);
//         ctx.stroke();
//         ctx.closePath();
//     }

// });

// olympic circles
ctx.beginPath();

ctx.lineWidth = '8';
ctx.strokeStyle = 'blue';
ctx.moveTo(90, 50); 
ctx.arc(50, 50, 40, 0, angle(), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(180, 50); 
ctx.arc(140, 50, 40, 0, angle(), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(270, 50); 
ctx.arc(230, 50, 40, 0, angle(), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(120, 90); 
ctx.arc(90, 90, 40, 0, angle(), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(90, 50); 
ctx.arc(50, 50, 40, 0, angle(20), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(90, 50); 
ctx.arc(50, 50, 40, 0, angle(120), true);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(180, 50); 
ctx.arc(140, 50, 40, 0, angle(170), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(225, 90); 
ctx.arc(185, 90, 40, 0, angle(), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(180, 50); 
ctx.arc(140, 50, 40, 0, angle(30), false);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(180, 50); 
ctx.arc(140, 50, 40, 0, angle(190), true);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(270, 50); 
ctx.arc(230, 50, 40, 0, angle(150), false);
ctx.stroke();
ctx.closePath();