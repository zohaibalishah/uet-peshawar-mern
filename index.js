function getResults(){
    let output = ""
    var number = prompt("Enter Number");
    
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        
        output += `<p>${number} * ${i} = ${result}</p>`
        
    }
    return output 
}

const showResultBtn = document.querySelector(".show-result");
const resultContainer = document.querySelector(".result-container");

showResultBtn.addEventListener("mouseout", (e)=> {
    resultContainer.innerHTML = getResults()
})

// array
// object
// map,forEach,filter,
//
// for (let index = 0; index < array.length; index++) {

// }

// const i = 0;
// while (i < 5) {
//   i++;
// }
