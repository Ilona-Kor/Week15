function check() {
let login = document.getElementById("login");
let password = document.getElementById("password");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone number");
let aboutMe = document.getElementById("about me");

document.getElementById('error').innerHTML = "";

if (login.value = "/^[a-z]+$/i") {
    document.getElementById('error')
    .innerHTML += "Используйте латинскую раскладку!<br>";
}
if (password.value.length <= 6)
document.getElementById('error')
    .innerHTML += "Слишком короткий пароль<br>";

if (email.value == '') {
    document.getElementById('error')
    .innerHTML += "Заполните поле ввода E-mail<br>";
}
if (phoneNumber.value.length > 12) {
    document.getElementById('error')
    .innerHTML += "Номер телефона заполнен некорректно<br>";
}
if (aboutMe.value == '') {
    document.getElementById('error')
    .innerHTML += "Обязательно для заполнения<br>";
}
}