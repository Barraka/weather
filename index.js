let container = document.querySelector('.container');
let search = document.querySelector('#search');
let golook = document.querySelector('#golook');
let output = document.querySelector('.output');
search.value="Cellettes";
golook.addEventListener('click',getWeatherData);
const slider = document.querySelector('.test');
window.slider=slider;
scrollBehavior();

async function getWeatherData() {
    let town=search.value;
    // let url=`https://api.openweathermap.org/data/2.5/weather?q=${town}&APPID=408189a9139c5bfc0cc0a7c9ed3e9235`;
    let url=`https://api.openweathermap.org/data/2.5/forecast?q=${town}&APPID=408189a9139c5bfc0cc0a7c9ed3e9235`;
    let response = await fetch(url);
    let data = await response.json();
    window.data = data;
    output.textContent = convertToCelsius(data.main.temp);
    //Icon
    const code = data.weather[0].icon;
    let icon = document.createElement('div');
    icon.classList.add('icon');
    let iconImg = document.createElement('img');
    iconImg.classList.add('iconImg');
    iconImg.src=`https://openweathermap.org/img/wn/${code}@2x.png`
    icon.appendChild(iconImg);
    container.appendChild(icon);
    //Description
    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent=data.weather[0].description;
    container.appendChild(description);
    //Temp
    let temp = document.createElement('div');
    temp.classList.add('temp');
    temp.textContent=data.main.temp;
    container.appendChild(temp);

}

function convertToCelsius(t) {
    const value=parseFloat(t)-273.13;
    return value;
}

function convertToFarhenheit(t) {
    const value=(parseFloat(t)-273.15) * (9/5) + 32;
    return value;
}

function getIcon(n) {
    `https://openweathermap.org/img/wn/${n}@2x.png`
}

function scrollBehavior() {
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX;
    //   scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    window.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1; //scroll-fast
      slider.offsetLeft = scrollLeft - walk;
      slider.style.cssText=`transform: translateX(${walk}px)`;
      console.log('x: ' + walk);
    });
}