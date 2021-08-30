var sentence=document.querySelector("#txt-input");
var translate=document.querySelector("#btn-translate");

console.log(sentence);

function click(){
    console.log("Clicked");
    console.log("Input", sentence.value);
};

translate.addEventListener("click", click);

