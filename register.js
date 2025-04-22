let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");

let info = document.getElementById("info");

login.onclick = async () => {
    await fetch("http://127.0.0.1:8081/token", {
        method: "POST",
        body: JSON.stringify({ username: username.value, password: password.value }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(n => {
        if (n.status == "success") {
            info.innerText = `Account ${username.value} registered! Going back to login page in 3 seconds.`;
            setTimeout(()=>{window.location.href = "/login.html"}, 3000);
        }
    });

}
