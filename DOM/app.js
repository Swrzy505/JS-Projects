let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
let div = document.querySelector('div');

btn.addEventListener('click',function(){
    let random = value();
    h3.innerText = random;
});
btn.addEventListener('click',function(){
    let bgc = value();
    div.style.backgroundColor = bgc;
    console.log("color updated");
})



function value(){
   let a = Math.round(Math.random()*255);
   let b = Math.round(Math.random()*255);
   let c = Math.round(Math.random()*255);
   let color = (`RGB(${a},${b},${c})`);
   
   return color;//to return the value of the color to the function in add event listener
}

