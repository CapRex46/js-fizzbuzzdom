
const output1Html = document.querySelector('.output1');
const output2Html = document.querySelector('.output2');

for (let i = 0; i <= 100; i++) {
   console.log(i);
}


for (let x = 0; x < 100; x++) {
    if (x % 3 === 0 && x !== 0) {
        output2Html.innerHTML += `<div class="output2">fizz</div>`  
    }
    else if (x % 2 === 0) {
        output2Html.innerHTML += `<div class="output2">${x}</div>` 
    }  
    else if (x % 5 === 0 && x !== 0) {
        output2Html.innerHTML += `<div class="output2">buzz</div>`  
    }
    else {
        output2Html.innerHTML += `<div class="output2">${x}</div>`
    }

}