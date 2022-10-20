import makeItRain from './app.js';
import './styles.css';
import './app.css';
import logoPicture from './assets/Cloudy.png';

let container = document.querySelector('.container');
let search = document.querySelector('#search');
let outerSearch = document.querySelector('.outerSearch');
let golook = document.querySelector('#golook');
let logo = document.querySelector('.logo');
let logoImg = document.querySelector('#logoImg');
search.value="Paris";
logoImg.src=logoPicture;
search.addEventListener('keydown',checkEnter);
golook.addEventListener('click',getWeatherData);
let degrees='celcius';
makeItRain.start();
function checkEnter(e) {
    if(e.key==='Enter')getWeatherData();
}
let dataNow, dataForecast;

async function getWeatherData() {
    let town=search.value;
    let url_now=`https://api.openweathermap.org/data/2.5/weather?q=${town}&APPID=408189a9139c5bfc0cc0a7c9ed3e9235`;
    let url_forecast=`https://api.openweathermap.org/data/2.5/forecast?q=${town}&APPID=408189a9139c5bfc0cc0a7c9ed3e9235`;    
    let responseNow, responseForecast;    
    try {
        await fetch(url_now)
        .then(r=>{
            if(r.ok)responseNow=r;
            else {
                notFound();
                return;
            }
        })
    } catch {
        notFound();
        return;
    }
    //Handle data    
    if(responseNow){
        dataNow = await responseNow.json();
        responseForecast = await fetch(url_forecast);
        dataForecast = await responseForecast.json();
        doDOM(dataNow, dataForecast);
    }
    function notFound() {
        let errorContainer = document.createElement('div');
        errorContainer.classList.add('errorContainer');
        let errorText = document.createElement('div');
        errorText.classList.add('errorText');
        errorText.textContent=`${town} was not found. Try with a valid town or zip code`;
        let errorClose = document.createElement('div');
        errorClose.classList.add('errorClose');
        errorClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>';
        errorContainer.appendChild(errorText);
        errorContainer.appendChild(errorClose);
        errorClose.addEventListener('click', e=>{e.currentTarget.parentElement.remove();});
        outerSearch.appendChild(errorContainer);
    }    
}

function doDOM(n,f) {
    let data=n;
    let dataForecast=f;
    //Now section
    logo.style.transform='translateY(-400px)';
    outerSearch.classList.remove('searchInitial');
    while(outerSearch.nextElementSibling)outerSearch.nextElementSibling.remove();
    //Build elements
    let now = document.createElement('div');
    now.classList.add('now');
    let forecast = document.createElement('div');
    forecast.classList.add('forecast');
    let innerForecast = document.createElement('div');
    innerForecast.classList.add('innerForecast');
    forecast.appendChild(innerForecast)
    container.appendChild(now);
    container.appendChild(forecast);
    scrollBehavior();
    //Overlay
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    //Left pane
    let cloudsLabel = document.createElement('div');
    cloudsLabel.classList.add('nowLabel');
    cloudsLabel.textContent = 'Clouds %:';
    let cloudsP = document.createElement('div');
    cloudsP.classList.add('nowText');
    cloudsP.textContent=data.clouds.all;
    let speedLab = document.createElement('div');
    speedLab.classList.add('nowLabel');
    speedLab.textContent='Wind Speed:';
    let speed = document.createElement('div');
    speed.classList.add('nowText');
    speed.textContent=data.wind.speed;
    let debLabel = document.createElement('div');
    debLabel.classList.add('nowLabel');
    debLabel.textContent='Wind Dir. :';
    let deg = document.createElement('div');
    deg.classList.add('nowText');
    deg.textContent = data.wind.deg;
    let leftPane = document.createElement('div');
    leftPane.classList.add('leftPane');
    leftPane.appendChild(cloudsLabel);
    leftPane.appendChild(cloudsP);
    leftPane.appendChild(speedLab);
    leftPane.appendChild(speed);
    leftPane.appendChild(debLabel);
    leftPane.appendChild(deg);
    //Right pane
    let tempminLabel = document.createElement('div');
    tempminLabel.classList.add('nowLabel');
    tempminLabel.textContent = 'Temp. Min:';
    let tempMin = document.createElement('div');
    tempMin.classList.add('nowText');
    tempMin.setAttribute('data-temp','now');
    tempMin.innerHTML = convertToCelsius(data.main.temp_min) + ' &#8451';
    let tempmaxLabel = document.createElement('div');
    tempmaxLabel.classList.add('nowLabel');
    tempmaxLabel.textContent = 'Temp. Max:';
    let tempMax = document.createElement('div');
    tempMax.classList.add('nowText');
    tempMax.setAttribute('data-temp','now');
    tempMax.innerHTML=convertToCelsius(data.main.temp_max)+' &#8451';
    let humLabel = document.createElement('div');
    humLabel.classList.add('nowLabel');
    humLabel.textContent = 'Humidity:';
    let humidity = document.createElement('div');
    humidity.classList.add('nowText');
    humidity.textContent = data.main.humidity;
    let rightPane = document.createElement('div');
    rightPane.classList.add('rightPane');
    rightPane.appendChild(tempminLabel);
    rightPane.appendChild(tempMin);
    rightPane.appendChild(tempmaxLabel);
    rightPane.appendChild(tempMax);
    rightPane.appendChild(humLabel);
    rightPane.appendChild(humidity);
    //Middle Pane
    //Name
    let place = document.createElement('div');
    place.classList.add('place');
    place.textContent=data.name;
    //Icon
    const code = data.weather[0].icon;
    let icon = document.createElement('div');
    icon.classList.add('icon');
    let iconImg = document.createElement('img');
    iconImg.classList.add('iconImg');
    iconImg.src=`https://openweathermap.org/img/wn/${code}@2x.png`
    icon.appendChild(iconImg);
    //Description
    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent=data.weather[0].description;
    //Temp
    let tempOuter = document.createElement('div');
    tempOuter.classList.add('tempOuter');
    let temp = document.createElement('div');
    temp.classList.add('temp');
    let tempSign = document.createElement('div');
    tempSign.classList.add('tempSign');
    if(degrees==='celcius') {
        temp.innerHTML=convertToCelsius(data.main.temp);
        tempSign.innerHTML=' &#8451';
    }
    else {
        temp.innerHTML=convertToFarhenheit(data.main.temp) + ' &#8457';
        tempSign.innerHTML=' &#8457';
    }
    tempOuter.addEventListener('click',toggleTemp);
    tempOuter.appendChild(temp);
    tempOuter.appendChild(tempSign);
    let middlePane = document.createElement('div');
    middlePane.classList.add('middlePane');
    middlePane.appendChild(place);
    middlePane.appendChild(icon);
    middlePane.appendChild(description);
    middlePane.appendChild(tempOuter);
    //Mount
    now.appendChild(leftPane);
    now.appendChild(middlePane);
    now.appendChild(rightPane);
    //Adapt BG
    let clouds=data.clouds.all;
    now.style.backgroundColor=getBg(clouds);
    //Forecast
    const listLength=dataForecast.list.length;
    for(let i=0;i<listLength;i++) {
        createCard(dataForecast.list[i],i);
    }
}

function toggleTemp() {
    if(degrees==='celcius')degrees='fahrenheit';
    else degrees='celcius';
    let allTemps=document.querySelectorAll('div[data-temp]');
    let tempSign = document.querySelector('.tempSign');
    let temp = document.querySelector('.temp');
    if(degrees==='celcius') {
        temp.textContent=((parseFloat(temp.textContent) - 32) * 5/9).toFixed(1);
        tempSign.innerHTML=' &#8451';
    }
    else {
        temp.textContent=((parseFloat(temp.textContent) * 9/5) +32).toFixed(1);
        tempSign.innerHTML=' &#8457';
    }
    allTemps.forEach(x=>{
        let currentTemp=parseFloat(x.textContent);
        if(degrees==='celcius') {
            let newTemp = (currentTemp - 32) * 5/9;
            x.innerHTML=newTemp.toFixed(1) + ' &#8451';
        }
        else {
            let newTemp = (currentTemp * 9/5) + 32;
            x.innerHTML=newTemp.toFixed(1) + ' &#8457';
        }
    });
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
    let dateData=new Date(d.dt * 1000)
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
    temp.setAttribute('data-temp',i);
    if(degrees==='celcius')temp.innerHTML=convertToCelsius(d.main.temp)+' &#8451';
    else temp.innerHTML=convertToFarhenheit(d.main.temp) + ' &#8457';
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
        let cloudsLabel = document.createElement('div');
        cloudsLabel.classList.add('overlayLabel');
        let clouds = document.createElement('div');
        clouds.classList.add('overlayText');
        cloudsLabel.textContent='Clouds % :';
        clouds.textContent=dataForecast.list[id].clouds.all;
        //Humidity
        let humidityLabel = document.createElement('div');
        humidityLabel.classList.add('overlayLabel');
        let humidity = document.createElement('div');
        humidity.classList.add('overlayText');
        humidityLabel.textContent='Humidity:';
        humidity.textContent= dataForecast.list[id].main.humidity;
        //TempMin
        let tempLabel = document.createElement('div');
        tempLabel.classList.add('overlayLabel');
        let tempMin = document.createElement('div');
        tempMin.classList.add('overlayText');
        tempMin.setAttribute('data-temp',id);
        tempLabel.textContent='Temp. Min:';
        if(degrees==='celcius')tempMin.innerHTML= convertToCelsius(dataForecast.list[id].main.temp_min)+' &#8451';
        else tempMin.innerHTML= convertToFarhenheit(dataForecast.list[id].main.temp_min)+' &#8457';
        //TempMax
        let tempmaxLabel = document.createElement('div');
        tempmaxLabel.classList.add('overlayLabel');        
        let tempMax = document.createElement('div');
        tempMax.classList.add('overlayText');
        tempMax.setAttribute('data-temp',id);
        tempmaxLabel.textContent='Temp. Max:';
        if(degrees==='celcius')tempMax.innerHTML= convertToCelsius(dataForecast.list[id].main.temp_max)+' &#8451';
        else tempMax.innerHTML= convertToFarhenheit(dataForecast.list[id].main.temp_max)+' &#8457';
        //Wind
        let windLabel = document.createElement('div');
        windLabel.classList.add('overlayLabel');
        let degLabel = document.createElement('div');
        degLabel.classList.add('overlayLabel');
        let wind = document.createElement('div');
        wind.classList.add('overlayText');
        windLabel.textContent = 'Wind:';
        wind.textContent= dataForecast.list[id].wind.speed;
        let deg = document.createElement('div');
        deg.classList.add('overlayText');
        degLabel.textContent = 'Deg:'
        deg.textContent=dataForecast.list[id].wind.deg;
        //Close
        let close = document.createElement('div');
        close.classList.add('close');
        close.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 25.35h20v-3H14ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>';
        close.addEventListener('click',e=> {
            e.currentTarget.parentElement.remove();
        });
        //Mount
        overlay.appendChild(cloudsLabel);
        overlay.appendChild(clouds);
        overlay.appendChild(humidityLabel);
        overlay.appendChild(humidity);
        overlay.appendChild(tempLabel);
        overlay.appendChild(tempMin);
        overlay.appendChild(tempmaxLabel);
        overlay.appendChild(tempMax);
        overlay.appendChild(windLabel);
        overlay.appendChild(wind);
        overlay.appendChild(degLabel);
        overlay.appendChild(deg);
        overlay.appendChild(close);
    }
    cardOuter.appendChild(more);
    //Build
    let innerForecast = document.querySelector('.innerForecast');
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

function scrollBehavior() {
    let innerForecast = document.querySelector('.innerForecast');
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
        console.log('distance: ' + distance);
        let coord = innerForecast.lastElementChild.getBoundingClientRect();
        let lastElem=coord.x+coord.width;
        if(distance<=0 && (lastElem>=window.innerWidth ||walk>0)) {
            console.log('inner distance: ' + distance);
            innerForecast.style.transform=`translateX(${distance}px)`;
        }
    }
}

