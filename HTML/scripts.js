let x;
// Store variable in local storage
if (localStorage.getItem("count")) {
    x = parseInt(localStorage.getItem("count"))
} else {
    x = 0;
}

document.getElementById("counter").innerHTML = x
document.getElementById("btn").addEventListener("click", iterate)

function iterate() {
    x += 1;
    localStorage.setItem("count", x)
    console.log(x)
    document.getElementById("counter").innerHTML = x
}

