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

    if(nameInputValue == '') return;

    if(nameInputValue.length < 2){
        console.log('ERROR! Name should have at least 2 characters')
    }
    
});