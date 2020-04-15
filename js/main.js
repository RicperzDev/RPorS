let randomNumber = Number((Math.random()*2).toFixed());
let cpuMoves = ["piedra", "papel", "tijera"];
let cpuSelect = cpuMoves[randomNumber];

let uScore = document.querySelector("#userScore");
let pcScore = document.querySelector("#cpuScore");
let userScore = 0;
let cpuScore = 0;
let main = document.querySelector("#main");

let x;

let userSelection = (move) => {

	switch(move){
		case 'piedra':
		x = "piedra";
		main.innerHTML = `<div id="result">
			<img class="select" src="img/piedra.png">
			<img id="versus" src="img/vs.png">
			<img class="cpuSelection" src="img/${cpuSelect}.png">
					</div>
					<footer>
						<div class="btn btn-dark" id="back" onclick="home()">Home</div>
					</footer>`
		break

		case 'papel':
		x = "papel";
		main.innerHTML = `<div id="result">
			<img class="select" src="img/papel.png">
			<img id="versus" src="img/vs.png">
			<img class="cpuSelection" src="img/${cpuSelect}.png">
					</div>
					<footer>
						<div class="btn btn-dark" id="back" onclick="home()">Home</div>
					</footer>`
		break

		case 'tijera':
		x = "tijera";
		main.innerHTML = `<div id="result">
			<img class="select" src="img/tijera.png">
			<img id="versus" src="img/vs.png">
			<img class="cpuSelection" src="img/${cpuSelect}.png">
					</div>
					<footer>
						<div class="btn btn-dark" id="back" onclick="home()">Home</div>
					</footer>`
		break
	};

	let userSelect = document.querySelector(".select");
	let cpuSelection = document.querySelector(".cpuSelection");

	if (x == "piedra" && cpuSelect == "tijera" || x == "tijera" && cpuSelect == "papel" || x == "papel" && cpuSelect == "piedra" ) {
		userScore++
		userSelect.classList.add("win");
		cpuSelection.classList.add("lose");
		uScore.innerHTML = userScore;

	}

	else if (x == cpuSelect) {

	}

	else {
		cpuScore++
		userSelect.classList.add("lose");
		cpuSelection.classList.add("win");
		pcScore.innerHTML = cpuScore;
	}
};

let home = () => {
	main.innerHTML = `<h2 class="display-4" id="title">Choose your move</h2>
						<div id="options">
							<img class="imgBorder" id="roca" src="img/piedra.png" onclick="userSelection('piedra')">
							<img class="imgBorder" id="hoja" src="img/papel.png" onclick="userSelection('papel')">
							<img class="imgBorder" id="cortadora" src="img/tijera.png" onclick="userSelection('tijera')">
						</div>`;
	randomNumber = Number((Math.random()*2).toFixed());
	cpuMoves = ["piedra", "papel", "tijera"];
	cpuSelect = cpuMoves[randomNumber];
}