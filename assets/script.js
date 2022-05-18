// Koala Count

let screen = document.createElement("div");

document.getElementById("box").appendChild(screen);

screen.classList.add("screen");

// Number 
let numb = document.createElement("p");
let numb_text = document.createTextNode("0");

numb.appendChild(numb_text);
screen.appendChild(numb);

numb.classList.add("number");

// Btn Container

let btn_container = document.createElement("div");
screen.after(btn_container);

btn_container.classList.add("container");

// Button: plus

let plus = document.createElement("button");
let plus_text = document.createTextNode("");

plus.appendChild(plus_text);
btn_container.appendChild(plus);

plus.classList.add("plus-btn");

// Button: Reset

let reset = document.createElement("button");
let reset_text = document.createTextNode("Reset");

reset.appendChild(reset_text);

btn_container.appendChild(reset);

reset.classList.add("reset-btn");

// Button: minus

let minus = document.createElement("button");
let minus_text = document.createTextNode("");

minus.appendChild(minus_text);
btn_container.appendChild(minus);

minus.classList.add("minus-btn");


//COUNTER  FUNCTION

let i = 0;

plus.addEventListener("click", () => {
  i++;
  countNumber();
  animationSave ()
  numb.innerHTML = i;
  if (i > 0) {
    numb.style.color = "green";
  }
});

minus.addEventListener("click", () => {
  i--;
  countNumber();
  animation ();
  numb.innerHTML = i;
  if (i < 0) {
    numb.style.color = "red";
  }
});

reset.addEventListener("click", () => {
  i = 0;
  countNumber();
  numb.innerHTML = i;

  if (i == 0) {
    numb.style.color = "black";
  }
});

function countNumber(){
    if(numb.innerHTML == -5) {
        alert("Are you sure you want to continue? So you won't save them!")
    } else if(numb.innerHTML == 15) {
        alert("Good job! You saved two koalas! Go up to 30 to save four!")
    } else if (numb.innerHTML == 30) {
        alert("Marvelous! You're doing great!")
    }
}
   
function animation (){
   let firekoala = document.getElementById("koalafire") 
    setTimeout(() => firekoala.style.display= "block",);
    setTimeout(() => firekoala.style.display= "none", 1000);
}   

function animationSave (){
    let safekoala = document.getElementById("koalasafe") 
     setTimeout(() => safekoala.style.display= "block",);
     setTimeout(() => safekoala.style.display= "none", 1000);
 }  
//miglioramenti da fare: -animazione deve comparire in posizione random -effetto click sfocato//

