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

    gridString += `<div class="square ${name} ${color}">${i}</div>`;
    console.log(`iterazione ${i}`, gridString);
}
