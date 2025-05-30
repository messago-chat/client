if (localStorage.getItem("messago-token") == null && localStorage.getItem("messago-username") == null) {
    console.log(localStorage.getItem("messago-token"))
    console.log(localStorage.getItem("messago-username"))
    window.location.href = "/login/login.html";
} 
fetch("http://127.0.0.1:8081/check", {
    method: "POST",
    body: JSON.stringify({ username: localStorage.getItem("messago-username"), token: localStorage.getItem("messago-token") }),
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => res.json()).then(n => {
    console.log("exists? ", n.exists);
    if (!n.exists) {
        window.location.href = "/login/login.html";
    }
});


function loadFeed() {
    
}

window.onload = loadFeed;

function logout() {
    localStorage.clear();
    window.location.href = "/login/login.html";
}
