function submitNoDefault (event){
    event.preventDefault();
    alert('funcionou?');
}
const buttonSubmit = document.querySelector('#submit');
buttonSubmit.addEventListener('click', submitNoDefault());

function resetAll () {
    const inputResets = document.querySelectorAll('input');
    const textReset = document.querySelector('textarea');
    for(let index in inputResets){
        const inputArea = inputResets[index];
        inputArea.value = '';
        inputArea.checked = false;
    }
    textReset.value = '';
}
const buttonReset = document.querySelector('#reset');
buttonReset.addEventListener('click', resetAll());