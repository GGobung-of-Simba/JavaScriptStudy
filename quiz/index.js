function 구구단() {
    i = Number(document.querySelector("#a").value);
    console.log(i)
    document.querySelector("#result").innerText = `\n${i}단`;
    for (let j=1; j<10; j++){
        document.querySelector("#result").innerText += `\n${i} * ${j} = ${i * j}`; 
    }    
}

import { griddd } from "/quiz/grid.js";

window.show = show

