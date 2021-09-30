const boardNumbers = function() {
    // we want to have 1 to 76 on the board
    const numbersContainerNode = document.getElementById("bingo-numbers")
    for (let number = 1; Number <= 76; number++) { 
      
        let newNumberNode = document.createElement("li") 
        newNumberNode.classList.add("number") 
        newNumberNode.innerText = bingoNumber

        newNumberNode.onclick = selectNumber
        numberContainerNode.appendChild(newNumberNode)
    }
}
