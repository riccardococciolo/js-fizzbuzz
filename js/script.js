const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";
for (let i = 1; i <= 100; i++) {

    let name;
    let color;
    if (i % 3 === 0 && i % 5 === 0) {
        name = "FizzBuzz";
        color = "red";
    } else if (i % 3 === 0) {
        name = "Fizz";
        color = "green";
    } else if (i % 5 === 0) {
        name = "Buzz";
        color = "yellow";
    } else {
        name = "";
        color = "white";
    }

    let result;
    if (name === "FizzBuzz") {
        result = name;
    } else if (name === "Fizz") {
        result = name;
    } else if (name === "Buzz") {
        result = name;
    } else {
        result = i;
    }

    gridString += `<div class="square ${color}">${result}</div>`;
    console.log(`iterazione ${i}`, gridString);
}

rowElem.innerHTML = gridString;
