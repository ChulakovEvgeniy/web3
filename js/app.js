

function app() {
    let age = document.getElementById("ageElement").value
    document.getElementById("result").innerText = "Вам " + age + " лет";
    document.getElementById("ageElement").value = '';
}

function app2() {
    let name = document.getElementById("nameElement").value
    document.getElementById("result").innerText = "Привет " + name;
    document.getElementById("nameElement").value = '';
}
