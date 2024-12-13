let inch = document.querySelector("#inch");
let cm = document.querySelector("#cm");

inch.addEventListener("input", function(){
    let i = this.value;
    let c = i*2.54;
    
    cm.value = c;
})

cm.addEventListener("input", function(){
    let c = this.value;
    let i = c/2.54;
    if(!Number.isInteger(i)){
        i = i.toFixed(2);
    }
    inch.value = i; 
})