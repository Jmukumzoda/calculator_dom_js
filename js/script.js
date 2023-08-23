
// let btn = document.querySelectorAll("btn");
// let btn2 = document.querySelectorAll("btn2");


// // btn.onclick = () => {
// // btn.classList.toggle('btn2')
// // }

// // btn2.onclick = () => {
// //     btn2.classList.toggle('btn')
// // }



// let div = document.querySelector('div')
// let box_by_id = document.querySelector('#imposter')
// let boxes = document.querySelectorAll('.box')

// let box = document.querySelector('.box')
// let h1 = document.querySelector('h1')
// let body = document.body

// box.className += "  active"

// if(box.classList.contains('active')) {
//     box.classList.remove('active')
// } else {
//     box.classList.add('active')
// }
// box.addEventListener('click', function() {
//     console.log('click');
// })

// box.onclick = () => {

//     box.classList.toggle('active')
//     // h1.innerText = "Bye bye world"
//     if(h1.innerText === "Anis hello") {
//         h1.innerText = "Hello world"
//     } else {
//         h1.innerHTML = "Anis hello"
//     }
// }
// box.ondblclick = () => {
//     console.log('double click');
// }
// box.onmouseenter = () => {
//     console.log('entered');
// }
// box.onmouseleave = () => {
//     console.log('left');
// }
// box.onmousemove = () => {
//     console.log('moving...');
// }
// body.onscroll = () => {
//     console.log('scrolling...');
// }


let counter = document.querySelector('.counter')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let notnumber = document.querySelector('.notnumber')
let random = document.querySelector('.random')
let p = document.querySelector('.zero')

let count = 0
function calculator() {
    p.innerHTML = count;
}
plus.addEventListener('click', function () {
    count++;
    calculator()
});
minus.addEventListener('click', function () {
    count--;
    calculator()
});
random.addEventListener('click', function () {
    count = Math.floor(Math.random() * 11);
    calculator();
});

notnumber.addEventListener('click', function () {
    count = 0
    calculator()
});