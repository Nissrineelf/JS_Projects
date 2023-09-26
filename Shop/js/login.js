let userName = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");

let getUserName = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");


login.addEventListener('click' , function(event) {

    // to not refresh the page
    event.preventDefault();

    // check the empty inputs
    if ( userName.value === '' || password.value === '' ){
        alert("Error, try again");
    } else {

        // check if the entered informations are existed
        if ( getUserName && getUserName === userName.value && getPassword && getPassword === password.value ) {
            window.location="main.html"
        } else {
            alert('username or password incorrect');
        }

    }
});