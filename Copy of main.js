
var canvas = new fabric.Canvas('myCanvas');

var playerX = 10;
var playerY = 10;

var larguraBloco = 30;
var alturaBloco = 30;

var objetoPlayer = "";
var objetoBloco = "";

function playerUpdate() {
	fabric.Image.fromURL("player.png", function (Img) {
		objetoPlayer = Img;

		objetoPlayer.scaleToWidth(150);
		objetoPlayer.scaleToHeight(140);
		objetoPlayer.set({
			top: playerY,
			left: playerX
		});
		canvas.add(objetoPlayer);

	});
}

function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (Img) {
		objetoBloco = Img;

		objetoBloco.scaleToWidth(larguraBloco);
		objetoBloco.scaleToHeight(alturaBloco);
		objetoBloco.set({
			top: playerY,
			left: playerX
		});
		canvas.add(objetoBloco);

	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (e.shiftKey == true && keyPressed == '80') { //80 é p
		console.log("p e shift pressionadas juntas");
		larguraBloco = larguraBloco + 10;
		alturaBloco = alturaBloco + 10;
		document.getElementById("larguraAtual").innerHTML = larguraBloco;
		document.getElementById("alturaAtual").innerHTML = alturaBloco;
	}
	if (e.shiftKey && keyPressed == '79') {
		console.log("o e shift pressionadas juntas");
		larguraBloco = larguraBloco - 10;
		alturaBloco = alturaBloco - 10;
		document.getElementById("larguraAtual").innerHTML = larguraBloco;
		document.getElementById("alturaAtual").innerHTML = alturaBloco;
	}
	//MOVIMENTO PERSONAGEM
	if (keyPressed == '38') {
		up();
		console.log("cima");
	}
	if (keyPressed == '40') {
		down();
		console.log("baixo");
	}
	if (keyPressed == '37') {
		left();
		console.log("esquerda");
	}
	if (keyPressed == '39') {
		right();
		console.log("direita");
	}

	//ESCOLHENDO A IMAGEM DOS BLOCOS
	if (keyPressed == '65') {
		newImage('wall.jpg');
		console.log("a");
	}
	if (keyPressed == '66') {
		newImage('ground.png');
		console.log("b");
	}
	if (keyPressed == '67') {
		newImage('light_green.png');
		console.log("c");
	}
	if (keyPressed == '68') {
		newImage('trunk.jpg');
		console.log("d");
	}
	if (keyPressed == '69') {
		newImage('roof.jpg');
		console.log("e");
	}
	if (keyPressed == '70') {
		newImage('yellow_wall.png');
		console.log("f");
	}
	if (keyPressed == '71') {
		newImage('dark_green.png');
		console.log("g");
	}
	if (keyPressed == '72') {
		newImage('unique.png');
		console.log("h");
	}
	if (keyPressed == '73') {
		newImage('cloud.jpg');
		console.log("i");
	}

}


function up() {
	if (playerY >= 0) {
		playerY = playerY - alturaBloco;
		canvas.remove(objetoPlayer);
		playerUpdate();
	}
}

function down() {
	if (playerY <= 500) {
		playerY = playerY + alturaBloco;
		canvas.remove(objetoPlayer);
		playerUpdate();
	}
}

function left() {
	if (playerX > 0) {
		playerX = playerX - larguraBloco;
		canvas.remove(objetoPlayer);
		playerUpdate();
	}
}

function right() {
	if (playerX <= 850) {
		playerX = playerX + larguraBloco;
		canvas.remove(objetoPlayer);
		playerUpdate();
	}
}
