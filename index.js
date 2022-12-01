const API_URL = "https://api.adviceslip.com/advice"


const GetConselhos = () => {
    axios.get(API_URL)
    .then(response => {
        let advice = response.data
        let conselho = document.getElementById("conselho")
        conselho.innerHTML = `<hr><h6>${advice.slip.advice}</h6><hr>`
    })
    .catch(error => console.error(error))
}