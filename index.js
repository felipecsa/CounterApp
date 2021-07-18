let num = 0
let saveEl = document.getElementById("save-el");
function increment(){
    num = num + 1
    document.getElementById("count-el").textContent = num;
}



function save(){
    console.log(num)
    let numEntire = " " + num + " - ";
    saveEl.innerText += numEntire;
    num = 0;
    document.getElementById("count-el").textContent = 0;
}


