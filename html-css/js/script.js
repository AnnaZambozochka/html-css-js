const inp1 = document.querySelector('inp1');
const inp2 = document.querySelector('inp2');
const resultBtn = document.querySelector('result');

resultBtn.onclick = function ipp12(result) {
     if (inp1.value > 0){
        const result1 = inp1.value*100
        inp2.textContent = result1
    } 
    if (inp2.value > 0){
        const result1 = inp2.value*100
        inp1.textContent = result1
    }  
}
 
