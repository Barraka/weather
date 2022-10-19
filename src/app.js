import rd from './assets/rd.png';

const makeItRain = (function () {
    let screen = document.querySelector('.screen');
    let rainCount = 0;

    function start() {
        let interval = setInterval(() => {
            buildSingleDrop();
            rainCount++;
            if(rainCount>200)clearInterval(interval);
        
        }, 100);
    }
    function buildSingleDrop() {
        let rdOuter = document.createElement('div');
        rdOuter.classList.add('rdOuter');
        const randStart = Math.floor(Math.random() * window.innerWidth)
        const randSideways = Math.floor(Math.random()*100);
        const randSpeed = Math.floor(Math.random()*4) + 9;
        const randThick = Math.floor(Math.random()*3) + 1;
        const randLand = Math.floor(Math.random()*10) + 90;
        const randDelay = Math.floor(Math.random() * 0);
        rdOuter.style.setProperty('--sideways', `${randSideways}px`);
        rdOuter.style.setProperty('--speed', `${randSpeed}s`);
        rdOuter.style.setProperty('--thickness', `${randThick}px`);
        rdOuter.style.setProperty('--start', `${randStart}px`);
        rdOuter.style.setProperty('--delay', `${randDelay}s`);
        rdOuter.style.setProperty('--land', `${randLand}vh`);
        screen.appendChild(rdOuter);
        
        let rainDrop = document.createElement('div');
        rainDrop.classList.add('rainDrop');
        rdOuter.appendChild(rainDrop);
        
        let splash = document.createElement('img');
        splash.classList.add('splash'); 
        splash.src=rd;
        rdOuter.appendChild(splash);
    }
    //----
    return {start};
})();

export default makeItRain;