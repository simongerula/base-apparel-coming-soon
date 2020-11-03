document.querySelector('.arrow-btn').addEventListener('click', checkInput);
var html = document.querySelector('body')

function checkInput() {
    let email = document.querySelector('.input-email').value;
    let checkIcon = document.querySelector('.check-icon');
    let errorType = document.querySelector('.error-type');
    let emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailExpression.test(email)) {
        checkIcon.style.display = "block";
        errorType.textContent = "Por favor ingrese un email valido"
        errorType.style.display = "block";
        return false;
    }
    else {
        return true;
    }
}

document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    if(!checkInput()) {
        console.log('error');
        e.preventDefault();
    }
    else {
        html.innerHTML = `
        <div class="form-sended">
            <img src="src/images/logo.svg" alt="">
            <h1> Muchas gracias por subscribirte </h1>
        </div> `
    }
})