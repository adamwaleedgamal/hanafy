document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('User').value;
    var password = document.getElementById('Passs').value;

    var usersData = JSON.parse(localStorage.getItem('DataOfUser')) || [];

    var isValidUser = usersData.some(function (user) {
        return user.username === username && user.password === password;
    });

    if (isValidUser) {
        window.location.href=("rev.html")
        alert("welcome To " + username);
    } else {
        alert("Invalid username or password. Please try again.");
    }
});