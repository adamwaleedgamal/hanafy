function updatepass() {
    let user_name = document.getElementById("username");
    let conpass = document.getElementById('newpass');
    for (let i = 0; i < SaveArr.length; i++) {
        if (SaveArr[i].username == user_name && SaveArr[i].password == pass) {
            SaveArr[i].password = pass.value;
            alert('change completed');
        }
        else {
            alert('The User Name is not correct');
        }
    }
}