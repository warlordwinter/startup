
function login() {
    // Get the input values
    const login_credentials = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    // You can perform login/authentication logic here
    if (login_credentials.username && login_credentials.password) {
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(login_credentials),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        
        }).then((response) => {
            if (response.status === 200) {
                // Show success
                window.location.href = 'upload_station.html';
            } else {
                return response.json();
            }
        }).then((data) => {
            alert(data);
        });
        // Redirect to another page
        
    } else {
        // Handle the case where login information is incomplete or incorrect
        alert('Please enter a valid username and password.');
    }
}
//lets get that fetch request for login

