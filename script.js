document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('A vos - Milo J.mp3');
    var playMusicButton = document.getElementById('playMusic');
    var openButton = document.getElementById('openButton');
    var closeButton = document.getElementById('closeButton');
    var envelopeWrapper = document.querySelector('.envelope-wrapper');
    var footerText = document.querySelector('.footer-text'); // Seleccionar el texto decorado

    playMusicButton.addEventListener('click', function() {
        audio.play();
        playMusicButton.style.display = 'none';
    });

    openButton.addEventListener('click', function() {
        envelopeWrapper.classList.add('open');
        document.querySelector('.flap').style.transform = 'rotateX(180deg)';
        const letter = document.querySelector('.letter');
        letter.style.transform = 'translate(-50%, -50%) translateY(0)';
        const envelope = document.querySelector('.envelope');
        envelope.style.height = `${letter.scrollHeight + 40}px`;
        createHearts(); // Creamos los corazones al abrir

        // Ocultamos el texto decorado al abrir
        if (footerText) {
            footerText.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function() {
        envelopeWrapper.classList.remove('open');
        document.querySelector('.flap').style.transform = 'rotateX(0deg)';
        const letter = document.querySelector('.letter');
        letter.style.transform = 'translate(-50%, -50%) translateY(100%)';
        const envelope = document.querySelector('.envelope');
        envelope.style.height = '300px';
        clearHearts(); // Limpiamos corazones al cerrar la carta

        // Mostramos el texto decorado al cerrar
        if (footerText) {
            footerText.style.display = 'block';
        }
    });

    document.getElementById('leftCard').addEventListener('click', function() {
        this.classList.toggle('flip');
    });

    document.getElementById('rightCard').addEventListener('click', function() {
        this.classList.toggle('flip');
    });

    function createHearts() {
        const heartContainer = document.querySelector('.heart-container');
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-moving';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.animationDuration = `${5 + Math.random() * 5}s`;
            heartContainer.appendChild(heart);
        }
    }

    function clearHearts() {
        const heartContainer = document.querySelector('.heart-container');
        heartContainer.innerHTML = '';
    }

    // Creamos corazones en movimiento al cargar la página
    createMovingHearts();
});

function createMovingHearts() {
    const body = document.body;
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-moving';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 0}s`;
        heart.style.animationDuration = `${5 + Math.random() * 5}s`;
        body.appendChild(heart);
    }
}
