const { response } = require("express");

function signUP() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var fullName = document.getElementById("fullname").value;

    if (username && password) {
        // Valid username and password, you can proceed
        fetch('/signup', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
                fullName: fullName
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((jsonResponse) => {
                // Handle the jsonResponse based on your needs
                console.log(jsonResponse);

                // Assuming you have a success message in the response
                alert('User registered successfully.');

                // Store the username in local storage
                localStorage.setItem('username', username);

                // Redirect to another page
                window.location.href = 'upload_station.html';
            })
            .catch((error) => {
                // Handle errors, including the case when the username is already in use (status code 409)
                console.log(response.status)
                console.error('Error during registration:', error);
                
                // Check if the error is due to a conflict (username already in use)
                if (error.response && error.response.status === 409) {
                    alert('Username already in use. Please choose a different username.');
                } else if (error.message.includes('Failed to fetch')) {
                    alert('Failed to connect to the server. Please try again later.');
                } else {
                    // Handle other errors as needed
                    console.log(jsonResponse);
                    alert('An error occurred during registration.');
                }
            });            
    } else {
        // Handle the case where login information is incomplete or incorrect
        alert('Please enter a valid username and password.');
    }
}
