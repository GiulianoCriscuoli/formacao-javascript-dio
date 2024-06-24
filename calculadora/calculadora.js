
document.addEventListener('DOMContentLoaded', () => {
    var display = document.querySelector('#display');
    var buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
           var valueButton = parseInt(event.target.value);            
           showDisplay(valueButton);
        });
    });

    function showDisplay(value) {

        if (value === ".") {
            display.value = "0";
        }

        display.value += value;
    }
});

function clearAll() {
    display.value = "";
}

function result() {
    y = eval(display.value);
    dipslay.value = y;

    if (display.value == undefined) {
        display.value = "";
    }
}