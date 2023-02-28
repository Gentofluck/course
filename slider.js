let item = document.querySelectorAll('.item');
const itemLength = item.length;
const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");
let slider = [];
for (let i = 0; i<itemLength; i++) {
    slider[i] = item[i];
    item[i].remove();
}
let step = 0;
let offset = 0;
function burgerSlider() {
    let div = document.createElement('div');
    div = slider[slider.length-1];
    div.classList.add('item');
    div.style.left = -800 + 'px';
    document.querySelector('.items').appendChild(div); 
    div = slider[step];
    div.classList.add('item');
    div.style.left = offset*800 + 'px';
    document.querySelector('.items').appendChild(div); 
    div = slider[step+1];
    div.classList.add('item');
    div.style.left = offset*800 + 800 + 'px';
    document.querySelector('.items').appendChild(div); 
    offset = 1;       
}
function burgerSliderL() {
    if (step == (slider.length-1)) {
        step = 1;
    } else {
        if (step == (slider.length-2)) {
            step = 0;
        } else {
            step = (step +2);
        }
    }
    let div = document.createElement('div');
    div = slider[step];
    div.classList.add('item');
    div.style.left = offset*800 + 'px';
    document.querySelector('.items').appendChild(div);                 
    if (step == 0) {
        step = (slider.length-1);
    } else {
        step = (step - 1);
    }
    offset = 1;
}
function left() {
    leftArrow.onclick = null;
    let slider2 = document.querySelectorAll('.item');
    let offset2 = -1;
    for (let i = 0; i<slider2.length; i++) {
        slider2[i].style.left = offset2*800 - 800 + 'px';
        offset2 ++;
    }
    setTimeout(function() {
        slider2[0].remove();
        burgerSliderL();
        leftArrow.onclick = left;
    }, 800);
}                
function burgerSliderR() {
    if (step == 0) {
        step = (slider.length-2);
    } else {
        if (step == 1) {
            step = (slider.length-1);
        } else {
            step = (step -2);
        }
    }
    let offset = -1;
    let div = document.createElement('div');
    div = slider[step];
    div.classList.add('item');
    div.style.left = offset*800 + 'px';
    document.querySelector('.items').insertBefore(div, items.firstElementChild);
    if (step == (slider.length-1)) {
        step = 0;
    } else {
        step = (step+1);
    }
    offset = 1;
}
function right() {
    rightArrow.onclick = null;           
    let slider2 = document.querySelectorAll('.item');
    let offset2 = (slider2.length-1); 
    for (let i = (slider2.length-1); i>=0; i--) {
        slider2[i].style.left = offset2*800 + 'px';
        offset2 --;
    }
    setTimeout(function() {
        slider2[(slider2.length-1)].remove();
        burgerSliderR();
        rightArrow.onclick = right;
    }, 800);
}
burgerSlider();
step = 0;
leftArrow.onclick = left;
rightArrow.onclick = right;