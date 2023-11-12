function signUP() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var fullName = document.getElementById("fullname").value;

    if (username && password) {
        // Valid username and password, you can proceed
        // Store the username in localStorage
        localStorage.setItem('username', username);
        // Update the user_name variable
        user_name = username;
        // Redirect to another page
        window.location.href = 'upload_station.html';
    } else {
        // Handle the case where login information is incomplete or incorrect
        alert('Please enter a valid username and password.');
    }
}

//lets get that fetch request for signup
fetch('/signup',{
    method: "POST",
    body: JSON.stringify({
        username: 'username',
        password: 'password',
        fullName: 'fullname'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then ((response) => response.json())
.then((jsonResponse) => {
    console.log(jsonResponse)
});

