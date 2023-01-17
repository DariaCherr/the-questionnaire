const form = document.querySelector(".form");
const sendName = document.querySelector("#name");
const sendSecondName = document.querySelector("#secondName");
const sendEmail = document.querySelector("#email");
const sendPhone = document.querySelector("#phone");

form.addEventListener("submit", (event) => {
    fetch(`http://46.21.248.81:3001/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: DariaCherr'
            },
            body: JSON.stringify({
                "name": sendName.value,
                "secondName": sendSecondName.value,
                "phone": sendPhone.value,
                "email": sendEmail.value,
                "agree": true
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            statusMessage.textContent = 'Загрузка данных прошла успешно!';
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            statusMessage.textContent = 'Ошибка! Данные не загрузились :(';
        })
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('message');
    form.appendChild(statusMessage);
    setTimeout(() => {
        statusMessage.remove();
    }, 5000);
    event.preventDefault();
});