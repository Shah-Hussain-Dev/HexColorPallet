for(let i  = 0; i<98; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    const container = document.querySelector('.container');
    container.appendChild(box);
}

let box = document.querySelectorAll('.box');



function randomHexColor(){
     colors = '';
    chars = '0123456789abcdef';
    let colorLength = 6;
    for(let i = 0; i<colorLength; i++){
        var randomColor = Math.floor(Math.random()* chars.length);
        
        colors += chars.substring(randomColor,randomColor+1);
       
    }
    return '#' + colors;
    console.log(randomColor);
    
}


const btn = document.querySelector('#button');
btn.addEventListener('click',addColor);

function addColor(){
    box.forEach((element)=>{
        let newColor = randomHexColor();
    
        element.style.backgroundColor = newColor;
        element.innerHTML= newColor;
        
    });
}
addColor();




