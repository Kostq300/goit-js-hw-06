const inputFind = document.querySelector('#validation-input');

inputFind.addEventListener('blur', event => {
    const input = event.currentTarget;
    const inputLength = Number(input.dataset.length);

    if (inputFind.value.length === inputLength) {
       inputFind.classList.remove('invalid');
        inputFind.classList.add('valid');
        // console.log(`кайф`)
    }
    else {
        inputFind.classList.add('invalid');
        inputFind.classList.remove('valid');
        // console.log(`норм`)
    }
        
})