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
    window.dataNow = data;
    //Overlay
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
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
    // now.appendChild(overlay);
    //Adapt BG
    let clouds=data.clouds.all;
    now.style.backgroundColor=getBg(clouds);
    

    //Forecast
    response = await fetch(url_forecast);
    data = await response.json();
    window.data2=data;
    data.list.forEach(x=>createCard(x));

}
function getBg(clouds) {
    let r=parseInt(0 + (80*clouds/100));
    let g=parseInt(0 + (80*clouds/100));
    let b=parseInt(255 - (175*clouds/100));
    return `rgb(${r},${g},${b})`;
}
function createCard(d) {
    let cardOuter = document.createElement('div');
    cardOuter.classList.add('cardOuter');
    //Date
    dateData=new Date(d.dt * 1000)
    let date = document.createElement('div');
    date.classList.add('date');
    
    let day = document.createElement('div');
    day.classList.add('day');
    day.textContent=dateData.toLocaleDateString("en-EN",{weekday: 'long'}).slice(0,3);
    let dayOuter = document.createElement('div');
    dayOuter.classList.add('dayOuter');
    let day2 = document.createElement('div');
    day2.classList.add('day2');
    day2.textContent=dateData.getDate();
    
    let month = document.createElement('div');
    month.classList.add('month');
    month.textContent=dateData.toDateString().substr(4,3);
    dayOuter.appendChild(day2);
    dayOuter.appendChild(month);
    let time = document.createElement('div');
    time.classList.add('time');
    time.textContent=dateData.toTimeString().substr(0,5);
    date.appendChild(day);
    date.appendChild(dayOuter);
    
    // date.appendChild(month);
    date.appendChild(time);
    cardOuter.appendChild(date);
    

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
    temp.innerHTML=convertToCelsius(d.main.temp)+'&#8451';
    cardOuter.appendChild(temp);
    //Clouds
    let clouds=d.clouds.all;
    cardOuter.style.backgroundColor=getBg(clouds);
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
      leave();
    });
    innerForecast.addEventListener('mouseup', () => {
      isDown = false;
      innerForecast.classList.remove('active');
    });
    innerForecast.addEventListener('mousemove', (e) => {drag(e);});
    innerForecast.addEventListener('swipe:left', (e) => {drag(e);});
    function down(e) {
        isDown = true;
        innerForecast.classList.add('active');
        startX = e.pageX;      
        currentPos = innerForecast.style.transform.match(/(\d+)/);
        if(currentPos==='' || currentPos===null)currentPos=0;
        else currentPos=currentPos[0];
    }
    function leave() {
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

