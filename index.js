
const APP_ID='7478cff8695fc4bd7598e39be1752b87'
const DEFAULT_VALUE="--"
const cityName =document.querySelector('.city_name');
const weatherState =document.querySelector('.weather_state');
const weatheIcon =document.querySelector('.weather_icon');
const temperature =document.querySelector('.temperature');

const sunRise =document.querySelector('.sunrise');
const sunSet =document.querySelector('.sunset');
const humidity =document.querySelector('.humidity');
const windSpeed =document.querySelector('.wind_speed');

const searchInput= document.querySelector('#search_input');

searchInput.addEventListener('change',(e)=>{
    console.log('[searchInput]',e);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then(async res=>{
        const data =await res.json();
        console.log ('[Search Input]',data);
        cityName.innerHTML= data.name||DEFAULT_VALUE;
        weatherState.innerHTML=data.weather[0].description||DEFAULT_VALUE;
        weatheIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        temperature.innerHTML=Math.round(data.main.temp) ||DEFAULT_VALUE;
        sunRise.innerHTML=moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
        sunSet.innerHTML=moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
        humidity.innerHTML= data.main.humidity||DEFAULT_VALUE;
        windSpeed.innerHTML=(data.wind.speed*3.6).toFixed(2)||DEFAULT_VALUE;

    });
});