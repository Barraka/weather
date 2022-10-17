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
let dataNow;
let dataForecast;
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
    dataForecast=data;
    // data.list.forEach(x=>createCard(x));
    const listLength=data.list.length;
    for(let i=0;i<listLength;i++) {
        createCard(data.list[i],i);
    }

}
function getBg(clouds) {
    let r=parseInt(0 + (80*clouds/100));
    let g=parseInt(0 + (80*clouds/100));
    let b=parseInt(255 - (175*clouds/100));
    return `rgb(${r},${g},${b})`;
}
function createCard(d,i) {
    let cardOuter = document.createElement('div');
    cardOuter.classList.add('cardOuter');
    cardOuter.setAttribute('data-id',i);
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

    //More info icon
    let more = document.createElement('div');
    more.classList.add('more');
    more.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>';
    more.addEventListener('click',showMore);

    function showMore(e) {
        let id=e.currentTarget.parentElement.getAttribute('data-id');
        id=parseInt(id);
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        cardOuter.appendChild(overlay);
        //Clouds
        let clouds = document.createElement('div');
        clouds.classList.add('clouds');
        clouds.textContent='Clouds % : ' + dataForecast.list[id].clouds.all;
        //Humidity
        let humidity = document.createElement('div');
        humidity.classList.add('humidity');
        humidity.textContent='Humidity: ' + dataForecast.list[id].main.humidity;
        //TempMin
        let tempMin = document.createElement('div');
        tempMin.classList.add('tempMin');
        tempMin.textContent='Temp. Min: \n' + dataForecast.list[id].main.temp_min;
        //TempMax
        let tempMax = document.createElement('div');
        tempMax.classList.add('tempMax');
        tempMax.textContent='Temp. Max: ' + dataForecast.list[id].main.temp_max;
        //Wind
        let wind = document.createElement('div');
        wind.classList.add('wind');
        wind.textContent='Wind: ' + dataForecast.list[id].wind.speed;
        let deg = document.createElement('div');
        deg.classList.add('deg');
        deg.textContent='Deg: ' + dataForecast.list[id].wind.deg;
        //Mount
        overlay.appendChild(clouds);
        overlay.appendChild(humidity);
        overlay.appendChild(tempMin);
        overlay.appendChild(tempMax);
        overlay.appendChild(wind);
        overlay.appendChild(deg);


    }
    cardOuter.appendChild(more);
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

