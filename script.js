
let keyElem=document.querySelector('.key');
let keyCodeElem=document.querySelector('.keycode');
let codeElem=document.querySelector('.code');

document.addEventListener('keydown', function (event){
    keyElem.innerHTML=event.key;
    keyCodeElem.innerHTML=event.keyCode;
    codeElem.innerHTML=event.code;

}
);


