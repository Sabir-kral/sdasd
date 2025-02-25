let form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let inputs =  document.querySelectorAll("input")
    let users = JSON.parse(localStorage.getItem("users"))
    let finduser = users.find(user =>user.username==inputs[0].value&&user.password==inputs[1].value)
    let p = document.querySelector("p")
    if (finduser) {
p.innerText = "giris ugurludur"
p.style.color = "green"
alert("giris ugurludur")
        window.location.href = "index.html"
    } else {
        p.innerText = "user tapilmadi"
        p.style.color = "red"
    }
})