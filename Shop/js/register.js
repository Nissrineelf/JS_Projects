let userName    = document.getElementById("username");
let mail        = document.getElementById("mail");
let password    = document.getElementById("password");
let register    = document.getElementById("register");
let note        = document.getElementById("note");

register.addEventListener('click' , function(event) {
    event.preventDefault();

    // Don't register with an empty input
    if ( userName.value === '' || mail.value === '' || password.value === '' ) {
        note.innerHTML = 'Thank you for adding your informations';
    
        // hide the note
        setTimeout(() => {
            note.innerHTML = '';
        }, 2000);
    

    } else {

        // save the informations

        localStorage.setItem('username' , userName.value );
        localStorage.setItem('password' , password.value );
        localStorage.setItem('mail' , mail.value );

        // redirect from register to login page
        setTimeout(() => {
            window.location = 'login.html'
        }, 1000);
    }

});