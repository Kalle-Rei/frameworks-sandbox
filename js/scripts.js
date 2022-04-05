console.log('scripts.js file');

var nameInput = document.getElementById('name');

console.log(nameInput);

nameInput.addEventListener('focus', function(){
    console.log('name input focus');
});

nameInput.addEventListener('blur', function(event){

    console.log('name input blur');
    var nameInputValue = event.target.value;
    console.log('value:', nameInputValue);

    var nameInputError = document.getElementById('name-error');

    if(nameInputValue == '') return;

    if(nameInputValue.length < 2){
        console.log('ERROR! Name should have at least 2 characters')
        nameInputError.innerText = 'ERROR! Name should have at least 2 characters';
    }
    else{
        nameInputError.innerText = '';
    }

    if (nameInputValue.length > 15) {
        nameInputError.innerText = 'ERROR! Name should have less than 15 characters';
    }

});