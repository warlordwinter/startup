
function login() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can perform login/authentication logic here
    if (username && password) {
        // Valid username and password, you can proceed
        // For example, you can store the username in localStorage
        localStorage.setItem('username', username);
        // Redirect to another page
        window.location.href = 'upload_station.html';
    } else {
        // Handle the case where login information is incomplete or incorrect
        alert('Please enter a valid username and password.');
    }
}

//lets get that fetch request for login
fetch('/login', {
    method: 'POST',
    body: {
        username: 'username',
        password: 'password',
    },
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },

}).then((response) => response.json())
    .then((jsonResponse) => {
        console.log(jsonResponse)
    });
