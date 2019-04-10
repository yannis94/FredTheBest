let img = document.getElementById('test');
let loop = 0;

let yeah = document.getElementById('ok');
let score = 0;

img.addEventListener("click", function() {
	console.log(loop);

	for (loop; loop < 10; loop++) {

		console.log("loop + 1")


		if (loop == 6) {
			img.style.backgroundColor = "blue";
			console.log('fond bleu');
		}
	}

	score++;
	yeah.innerHTML = "<p>" + score + "</p>";

	
});




