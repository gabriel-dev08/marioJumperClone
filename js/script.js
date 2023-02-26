const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        
        mario.classList.remove('pulo');

    }, 500);
}

const loop = setInterval(() => {
        
    const posicaoTubo = tubo.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (posicaoTubo <=120 && posicaoTubo > 0 && posicaoMario < 77) {

        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoTubo}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = './images/marioOver.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', pulo);