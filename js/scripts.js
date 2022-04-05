console.log('scripts.js file');

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');

console.log(nameInput);

function validateNameInput(event){
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
}

function validateEmailInput(event){
    var emailInputValue = event.target.value;
    var afterAtSign = "";
    var afterDot = "";
    console.log('email input blur');
    console.log('value:', emailInputValue);

    var emailInputError = document.getElementById('email-error');
    if(emailInputValue == '') return;

    if(!emailInputValue.includes('@') || !emailInputValue.includes('.')){
        emailInputError.innerText = 'ERROR! Not a valid email-address';
    }
    else{
        afterAtSign = emailInputValue.slice(emailInputValue.indexOf('@')+1, emailInputValue.indexOf('.'));
        afterDot = emailInputValue.slice(emailInputValue.indexOf('.')+1);
        emailInputError.innerText = '';
    }
    //@TODO: use afterAtSign and afterDot to manually check if the email is valid
    console.log('afterAtSign:', afterAtSign);
    console.log('afterDot:', afterDot);
}

nameInput.addEventListener('blur', validateNameInput);
emailInput.addEventListener('blur', validateEmailInput);