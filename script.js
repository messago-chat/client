let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");

let token = document.getElementById("token");

login.onclick = async () => {
    await fetch("http://127.0.0.1:8081/token", {
        method: "POST",
        body: JSON.stringify({ username: username.value, password: password.value }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(n => {
        token.innerText = n.token;
    });

}
