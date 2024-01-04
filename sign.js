var SaveArr = [];
var storedDataOfUser = localStorage.getItem('DataOfUser');
if (storedDataOfUser) {
    SaveArr = JSON.parse(storedDataOfUser);
}

function signupUser() {
    var SaveArr = [];
    var storedDataOfUser = localStorage.getItem('DataOfUser');
    if (storedDataOfUser) {
        SaveArr = JSON.parse(storedDataOfUser);
    }
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var Age = document.getElementById('Age').value;
    var Gender = document.getElementById('Hello').value;
    var phon = document.getElementById('Phone').value;

    var passrejex = /^[A-Za-z\d]{8,}$/;
    if (!passrejex.test(password.value)) {
        alert("Password Must Contaon at least 8 characters");
        return;
    }

    SaveArr.push({ username: username, password: password, Age: Age, Gender: Gender, Phone: phon });
    localStorage.setItem('DataOfUser', JSON.stringify(SaveArr));
    console.log(SaveArr);
}
signupUser();

function updatepass() {
    let user_name = document.getElementById("username").value;
    let conpass = document.getElementById('newpass').value;
    for (let i = 0; i < SaveArr.length; i++) {
        if (SaveArr[i].username == user_name) {
            SaveArr[i].password = pass;
            alert('change completed');
        }
        else {
            alert('The User Name is not correct');
        }
    }
}