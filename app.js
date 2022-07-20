document.addEventListener('DOMContentLoaded', () => {
	const gridDisplay = document.querySelector('.grid')
	const squareWidth = 3
	const allSquarsArr = []
	let currentPlayer = 1
	const winnerDislay = document.querySelector('#winner')
	const messageDislay = document.querySelector('#message')
	const winCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[6, 4, 2],
	]



	//Create table for game and add click for user class
	for (let i = 0; i < squareWidth ** 2; i++) {
		const square = document.createElement('div')
		square.addEventListener('click', addUserClass)
		allSquarsArr.push(square)
		gridDisplay.appendChild(square)
	}

	function addClass(el, className) {
		el.classList.add(className)
		checkForWin()
	}

	function addUserClass(e) {
		if ((!this.classList.contains('first-player')) && (!this.classList.contains('second-player'))) {
			if (currentPlayer === 1) {
				addClass(this, 'first-player')

				currentPlayer = 2
			} else if (currentPlayer === 2) {
				addClass(this, 'second-player')
				currentPlayer = 1
			}
		}
	}

	function checkForWin() {

		checkWhoWin()
		checkWhoWin("second-player", "Second")
	}
	function checkWhoWin(playerClass = "first-player", name = "First") {
		for (let i = 0; i < winCombinations.length; i++) {

			const winSqare1 = winCombinations[i][0];
			const winSqare2 = winCombinations[i][1];
			const winSqare3 = winCombinations[i][2];
			if (
				allSquarsArr[winSqare1].classList.contains(playerClass) &&
				allSquarsArr[winSqare2].classList.contains(playerClass) &&
				allSquarsArr[winSqare3].classList.contains(playerClass)
			) {
				winnerDislay.textContent = name + " " + 'player'
				messageDislay.textContent = "Refresh the browser to start again"
				allSquarsArr.forEach(el => el.removeEventListener('click', addUserClass))
			}
		}
	}
})



