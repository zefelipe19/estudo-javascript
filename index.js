const opah = () => {
    const div01 = document.querySelector(".div01")
    const nome = document.querySelector("#nome")
    if (nome.value == "Felipe" | nome.value == "felipe") {
        div01.innerHTML = `<h2>Opah ${nome.value}.</h2>`
    } else if (nome.value == "Victor" | nome.value == "victor") {
        div01.innerHTML = `<h4>O ${nome.value}pomba.</h4>`
    } else {
        div01.innerHTML = `<p><strong>Oi ${nome.value}</strong>.</p>`
    }
    nome.value = " "
}


const formulario = document.querySelector(".todo")
formulario.onsubmit = (event) => {
    event.preventDefault()

    const input = document.querySelector("#item").value
    const ul = document.querySelector("ul")
    const li = document.querySelector("li").cloneNode(true)
    ul.append(li)
}