$(document).ready(function(){
    $('i').click(function(){ //click on element i(html tag)
        $('ul').toggleClass('ul_show'); //toggle css class
        $('section').toggleClass('slide_image'); //toggle css class
        $('i').toggleClass('slide_bar'); ////toggle css class
        $('#move_container').toggleClass('move-cont');
    });
    $('li').click(function(){
        $(this).addClass('active').siblings().removeClass('active'); 
    })
});

let colorInput = document.querySelector('.color');
let hexInput = document.querySelector('.hex');

colorInput.addEventListener('input',()=>{
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.backgroundColor = color;
});

let colorInput1 = document.querySelector('.color1');
let hexInput1 = document.querySelector('.hex1');

colorInput1.addEventListener('input',()=>{
    let color1 = colorInput1.value;
    hexInput1.value = color1;
    document.querySelector('ul li a').style.backgroundColor = color1;
    document.querySelector('ul').style.backgroundColor = color1;
});

let colorInput2 = document.querySelector('.color2');
let hexInput2 = document.querySelector('.hex2');

colorInput2.addEventListener('input',()=>{
    let color2 = colorInput2.value;
    hexInput2.value = color2;
    let change =  document.getElementsByClassName('change-bg');
    for (let i = 0; i < change.length; i++) {
        change[i].style.backgroundColor = color2;
        
    }
   
});

let colorInput3 = document.querySelector('.color3');
let hexInput3 = document.querySelector('.hex3');

colorInput3.addEventListener('input',()=>{
    let color3 = colorInput3.value;
    hexInput3.value = color3;
    let change1 = document.getElementsByClassName('container');
    for (let j = 0; j < change1.length; j++) {
        change1[j].style.backgroundColor = color3;
    }
});

let colorInput4 = document.querySelector('.color4');
let hexInput4 = document.querySelector('.hex4');

colorInput4.addEventListener('input',()=>{
    let color4 = colorInput4.value;
    hexInput4.value = color4;
    document.getElementsByTagName('i')[0].style.color = color4;
});
