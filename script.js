const html = document.querySelector('html');
const imagemBanner = document.querySelector('.app__image');
const tituloBanner = document.querySelector('.app__title');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoesContexto = document.querySelectorAll('.app__card-button');
const startPauseBt = document.getElementById('start-pause');
const startPauseBtLabel = document.querySelector('#start-pause span');
const startPauseBtIcon = document.querySelector('.app__card-primary-button-icon');
const tempoNaTela = document.getElementById('timer');
const musicaFocoInput = document.getElementById('alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPausar = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('/sons/beep.mp3');

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

// MUSICA
musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
	musica.paused ? musica.play() : musica.pause();
})

// Alteração do contexto
focoBt.addEventListener('click', () => {
	tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco', 'foco.png');
	focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
	tempoDecorridoEmSegundos = 300;
	alterarContexto('descanso-curto', 'descanso-curto.png');
	curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
	tempoDecorridoEmSegundos = 900;
	alterarContexto('descanso-longo', 'descanso-longo.png');
	longoBt.classList.add('active');
})

function alterarContexto (contexto, imagem) {
	mostrarTempo();
	botoesContexto.forEach((botao) => {
			botao.classList.remove('active');
	})
	html.setAttribute('data-contexto', contexto);
	imagemBanner.setAttribute('src', `/imagens/${imagem}`);
	switch (contexto) {
		case "foco":
			tituloBanner.innerHTML = `
			Otimize sua produtividade,<br> 
			<strong class="app__title-strong">mergulhe no que importa.</strong>
			`;
			break;
		case "descanso-curto":
			tituloBanner.innerHTML = `
		    Que tal dar uma respirada?<br> 
		    <strong class="app__title-strong">Faça uma pausa curta!</strong>
		    `;
			break;
		case "descanso-longo":
			tituloBanner.innerHTML = `
		    Hora de voltar à superfície.<br> 
		    <strong class="app__title-strong"> Faça uma pausa longa.</strong>
		    `;
			break;
		default:
			break;
	}
}

// Temporizador
const contagemRegressiva = () => {
	if (tempoDecorridoEmSegundos <= 0) {
		audioTempoFinalizado.play();
		alert('Tempo finalizado');
		zerarIntervaloId();
		return;
	}
	tempoDecorridoEmSegundos -= 1;
	mostrarTempo();
}

function iniciarOuPausarTemporizador() {
	if (intervaloId) {
		audioPausar.play();
		zerarIntervaloId();
		return;
	}
	audioPlay.play();
	intervaloId = setInterval(contagemRegressiva, 1000);
	startPauseBtLabel.textContent = "Pausar";
	startPauseBtIcon.setAttribute('src', '/imagens/pause.png');
}

function zerarIntervaloId() {
	clearInterval(intervaloId);
	startPauseBtLabel.textContent = "Começar";
	startPauseBtIcon.setAttribute('src', '/imagens/play_arrow.png');
	intervaloId = null;
}

startPauseBt.addEventListener('click', iniciarOuPausarTemporizador);

// Exibir timer na tela
function mostrarTempo() {
	const tempo = new Date(tempoDecorridoEmSegundos * 1000);
	const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
	tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
