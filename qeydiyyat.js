let users = JSON.parse(localStorage.getItem("users"))||[];
let form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let inputs = document.querySelectorAll("input")
        let object = {
            username:inputs[0].value,
            email:inputs[1].value,
            tel:inputs[2].value,
            password:inputs[3].value
        }
        users.push(object)
        localStorage.setItem("users",JSON.stringify(users))
        form.reset()


})
function anaSeh() {
    window.location.href = "login.html"
}
