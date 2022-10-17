let container = document.querySelector('.container');
let search = document.querySelector('#search');
let golook = document.querySelector('#golook');
let output = document.querySelector('.output');
search.value="Cellettes";
let now = document.querySelector('.now');
let forecast = document.querySelector('.forecast');
golook.addEventListener('click',getWeatherData);
const innerForecast = document.querySelector('.innerForecast');
window.slider=innerForecast;
scrollBehavior();

async function getWeatherData() {
    let town=search.value;
    let url_now=`https://api.openweathermap.org/data/2.5/weather?q=${town}&APPID=408189a9139c5bfc0cc0a7c9ed3e9235`;
    let url_forecast=`https://api.openweathermap.org/data/2.5/forecast?q=${town}&APPID=408189a9139c5bfc0cc0a7c9ed3e9235`;
    
    let response = await fetch(url_now);
    let data = await response.json();
    window.data = data;
    //Icon
    const code = data.weather[0].icon;
    let icon = document.createElement('div');
    icon.classList.add('icon');
    let iconImg = document.createElement('img');
    iconImg.classList.add('iconImg');
    iconImg.src=`https://openweathermap.org/img/wn/${code}@2x.png`
    icon.appendChild(iconImg);
    now.appendChild(icon);
    //Description
    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent=data.weather[0].description;
    now.appendChild(description);
    //Temp
    let temp = document.createElement('div');
    temp.classList.add('temp');
    temp.textContent=convertToCelsius(data.main.temp);
    now.appendChild(temp);
    // //Build
    // container.appendChild(now);

    //Forecast
    response = await fetch(url_forecast);
    data = await response.json();
    window.data2=data;
    data.list.forEach(x=>createCard(x));

}
function createCard(d) {
    let cardOuter = document.createElement('div');
    cardOuter.classList.add('cardOuter');
    //Icon
    const code = d.weather[0].icon;
    let icon = document.createElement('div');
    icon.classList.add('icon');
    let iconImg = document.createElement('img');
    iconImg.classList.add('iconImg');
    iconImg.src=`https://openweathermap.org/img/wn/${code}@2x.png`
    icon.appendChild(iconImg);
    cardOuter.appendChild(icon);
    //Description
    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent=d.weather[0].description;
    cardOuter.appendChild(description);
    //Temp
    let temp = document.createElement('div');
    temp.classList.add('temp');
    temp.textContent=convertToCelsius(d.main.temp);
    cardOuter.appendChild(temp);
    //Build
    innerForecast.appendChild(cardOuter);

}
function convertToCelsius(t) {
    const value=parseFloat(t)-273.13;
    return value.toFixed(1);;
}

function convertToFarhenheit(t) {
    const value=(parseFloat(t)-273.15) * (9/5) + 32;
    return value.toFixed(1);;
}

function getIcon(n) {
    `https://openweathermap.org/img/wn/${n}@2x.png`
}

function scrollBehavior() {
    
    let isDown = false;
    let startX;
    let currentPos;
    
    innerForecast.addEventListener('mousedown', (e) => {
      down(e);
    });
    innerForecast.addEventListener('mouseleave', () => {
      leave(e);
    });
    innerForecast.addEventListener('mouseup', () => {
      isDown = false;
      innerForecast.classList.remove('active');
    });
    innerForecast.addEventListener('mousemove', (e) => {drag(e);});
    innerForecast.addEventListener('swipe:left', (e) => {drag(e);});
    innerForecast.addEventListener('touchstart', (e) => {down(e);});
    innerForecast.addEventListener('touchmove', (e) => {drag(e);});
    innerForecast.addEventListener('touchleave', (e) => {leave(e);});
    function down(e) {
        isDown = true;
        innerForecast.classList.add('active');
        startX = e.pageX;      
        currentPos = innerForecast.style.transform.match(/(\d+)/);
        if(currentPos==='' || currentPos===null)currentPos=0;
        else currentPos=currentPos[0];
    }
    function leave(e) {
        isDown = false;
        innerForecast.classList.remove('active');
    }
    function drag(e) {
        if(!isDown) return;
        e.preventDefault();    
        const x = e.pageX;
        let walk = (x - startX) * 1;
        let distance = walk - currentPos;
        let coord = innerForecast.lastElementChild.getBoundingClientRect();
        let lastElem=coord.x+coord.width;
        if(distance<=0 && (lastElem>=window.innerWidth ||walk>0))innerForecast.style.cssText=`transform: translateX(${distance}px)`;
    }
}

