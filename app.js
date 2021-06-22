 let input = document.querySelector('input');

input.onclick = ()=>{
    changeBK()
}

function changeBK() {
    document.body.style.backgroundColor = 'rgb('+ Math.round(Math.random() * 255) + ','
     + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
    
}