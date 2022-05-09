const count = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");

add.addEventListener("click", () => {
    count.innerHTML++;
    applyColor();
    countNumber()
});

sub.addEventListener("click",() =>{
    count.innerHTML--;
    applyColor();
    countNumber()
});

reset.addEventListener("click", () => {
    count.innerHTML = 0;
    applyColor();
    countNumber()
});

function applyColor() {
    if(count.innerHTML > 0) {
        count.style.color = "green";

    } else if (count.innerHTML < 0) {
        count.style.color = "red"; 
    } else {
        count.style.color = "black";  
    }
}

function countNumber(){
    if(count.innerHTML == -5) {
        alert("Are you sure you want to continue? So you won't save them!")
    } else if(count.innerHTML == 15) {
        alert("Good job! You saved two koalas! Go up to 30 to save four!")
    } else if (count.innerHTML == 30) {
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

