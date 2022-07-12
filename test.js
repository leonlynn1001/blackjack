const greetingEl=document.querySelector("#greeting");
let greetingArr = ["Hello","My name is","Lynn"];
for(let i=0;i<greetingArr.length;i++){
    greetingEl.textContent += greetingArr[i]+" "
}