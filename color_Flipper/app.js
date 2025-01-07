const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink", "yellow"]

const btn = document.getElementById("btn")

const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber()
    // console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    // floor is round the number
    return Math.floor(Math.random() * colors.length)
}

// c
