function login() {
    console.log("function is called");

    // Get the input values
    const login_credentials = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    console.log(login_credentials);

    // You can perform login/authentication logic here
    if (login_credentials.username && login_credentials.password) {
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(login_credentials),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.status === 400) {
                // Show an alert for invalid username or password
                alert('Please enter a valid username and password.');
                throw new Error('Invalid credentials'); // Skip the subsequent .then block
            } else if (response.status === 200) {
                // Show success
                alert('Login successful.');
                localStorage.setItem('username', login_credentials.username);
                window.location.href = 'upload_station.html';
            } else {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
                alert(data?.error || 'There was an error with the server. Please try again later.');
                console.log("Server error)")
                // You may want to add additional logic here to handle login failure
            }
        })
        .catch(error => {
            // alert('There was an error with the server. Please try again later.');
            console.error(error);
        });
    } else {
        // Handle the case where login information is incomplete or incorrect
        alert('Please enter a valid username and password.');
    }
}
