// function myfun(id) {
//     document.getElementById(id).value = 1; 
//     document.getElementById(id).innerHTML += 1;
// }

function start() {
    pam = '';
    fruits = document.getElementsByClassName("fruit");
    console.log(fruits[0].value);
    for(let i=0; i<fruits.length; i++) {
        pam += fruits[i].value;
        console.log('pam');
        console.log(pam);
    }
    // document.getElementById("result").innerHTML = pam;
}

window.addEventListener("click", start, false)


// document.getElementById("result") 

function check() {
    document.writeln('Hi' + document.basket.)
}