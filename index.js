
const getBtn = document.getElementById("get-btn")
const outputBox = document.getElementById("output-box")

function getDogFact(){
    fetch("https://dog-api.kinduff.com/api/facts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            outputBox.innerHTML = `<p>${data.facts}</p>`
            })
        .catch(err => console.log(err))
}

getBtn.addEventListener("click", getDogFact)