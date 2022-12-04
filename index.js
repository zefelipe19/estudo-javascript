const API_URL = "https://api.adviceslip.com/advice"
const API_SPOTIFY = "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10"

const GetConselhos = () => {
    axios.get(API_URL)
    .then(response => {
        const advice = response.data
        const conselho = document.getElementById("conselho")
        conselho.innerHTML = `<hr><h6>${advice.slip.advice}</h6><hr>`
    })
    .catch(error => console.error(error))
}
