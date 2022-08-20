function getPin(){
    const pin = genratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function genratePin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

const buttons = document.getElementsByClassName('button');
for (const btn of buttons) {
    btn.addEventListener('click',function(event){
        const number = event.target.innerText;
        const typedNumberField = document.getElementById('typed-numbers');
        const previousTypedNumber = typedNumberField.value;
        if(isNaN(number)){
            if(number === 'C'){
                typedNumberField.value = '';
            }
            else{
                typedNumberField.value = typedNumberField.value.slice(0, -1);
                /* const digits = previousTypedNumber.split('');
                digits.pop();
                const remainingDigits = digits.join('');
                typedNumberField.value = remainingDigits; */
            }
        }
        else{
            const newTypedNumber = previousTypedNumber + number; 
            typedNumberField.value = newTypedNumber;
        }
    })
}


document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';

    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';

    }
})