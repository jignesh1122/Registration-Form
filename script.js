let submit = document.querySelector("#btn");

let tr = document.querySelectorAll("tr");

submit.addEventListener("click", function () {
    let firstname = document.querySelector(".firstname")
    let lastname = document.querySelector(".lastname")
    let email = document.querySelector(".email")
    let phone = document.querySelector(".mo")
    let skill = document.querySelector(".skill")

    let c_firstname = document.createElement("td")
    let c_lastname = document.createElement("td")
    let c_email = document.createElement("td")
    let c_phone = document.createElement("td")
    let c_skill = document.createElement("td")

    c_firstname.innerHTML = firstname.value
    c_lastname.innerHTML = lastname.value
    c_email.innerHTML = email.value
    c_phone.innerHTML = phone.value
    c_skill.innerHTML = skill.value
    console.log(tr)
    console.log(firstname.value)

    tr[1].appendChild(c_firstname)
    tr[1].appendChild(c_lastname)
    tr[1].appendChild(c_email)
    tr[1].appendChild(c_phone)
    tr[1].appendChild(c_skill)
})