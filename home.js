// the current day 
let today = document.querySelector('#today');
let todayNumber = document.querySelector('#todayNumber'); 
let todayMonth = document.querySelector('#todayMonth'); 
let locationToday = document.querySelector('#location');
let todayTemperature = document.querySelector('#todayTemperature');
let todayConditionDesc = document.querySelector('#todayConditionDesc');
let todayConditionImg = document.querySelector('#todayConditionImg');
console.log(todayConditionImg);
let percentageWind = document.querySelector('#percentage-wind');
let speed = document.querySelector('#speed');
let direction = document.querySelector('#direction');
//the next day
let nextDayName = document.querySelector('#nextDayName');
let nextDayConditionImg = document.querySelector('#nextDayConditionImg');
let nextDayMorningTemp = document.querySelector('#nextDayMorningTemp');
let nextDayEveningTemp = document.querySelector('#nextDayEveningTemp');
let nextDayConditionDesc = document.querySelector('#nextDayConditionDesc');
// the last day 

let lastDayName = document.querySelector('#lastDayName');
let lastDayConditionImg = document.querySelector('#lastDayConditionImg');
let lastDayMorningTemp = document.querySelector('#lastDayMorningTemp');
let lastDayEveningTemp = document.querySelector('#lastDayEveningTemp');
let lastDayConditionDesc = document.querySelector('#lastDayConditionDesc');


//the search button
let searchTerm=document.querySelector("#searchTerm");





//the date of the current day
let date = new Date();
today.innerHTML = date.toLocaleString('en-us', {
    weekday: "long"
});

todayNumber.innerHTML = date.getDate();
todayMonth.innerHTML = date.toLocaleString('en-us',
    {
        month: "long"
    }
);



async function getWeatherData(cityName) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a1134f9f97804cec9ae115653242606&q=${cityName}&days=3`);
    let data = await response.json();
    console.log("Weather data fetched:", data);
    return data;
}

// the function of today
function displayCurrentData(data) {
    locationToday.innerHTML = data.location.name;
    todayTemperature.innerHTML = data.current.temp_c;
    todayConditionDesc.innerHTML = data.current.condition.text;
    todayConditionImg.setAttribute('src', "https:"+data.current.condition.icon);
    percentageWind.innerHTML = data.current.humidity + '%';
    speed.innerHTML = data.current.wind_kph + 'km/h';
    direction.innerHTML = data.current.wind_dir;

}



function displayNextData(data) {
    let arr = data.forecast.forecastday[1];
    
    nextDayConditionImg.setAttribute('src',"https:" + arr.day.condition.icon);
    nextDayMorningTemp.innerHTML = arr.day.maxtemp_c + '&#176;C';
    nextDayEveningTemp.innerHTML = arr.day.mintemp_c + '&#176;C';
    nextDayConditionDesc.innerHTML = arr.day.condition.text;
    let date=new Date(data.forecast.forecastday[1].date);
    console.log(date);
    nextDayName.innerHTML=date.toLocaleString('en-us',{
        weekday:"long"
    });

}


function displayLastData(data) {

    let arr = data.forecast.forecastday[2];
    nextDayConditionImg.setAttribute('src',"https:" + arr.day.condition.icon);
    lastDayMorningTemp.innerHTML = arr.day.maxtemp_c + '&#176;C';
    lastDayEveningTemp.innerHTML = arr.day.mintemp_c + '&#176;C';
    lastDayConditionDesc.innerHTML = arr.day.condition.text;

    let date=new Date( data.forecast.forecastday[2].date);
    lastDayName.innerHTML=date.toLocaleString('en-us',{
        weekday:"long"
    });




}

async function sequenceFunctions(city='giza') {
    let weatherData = await getWeatherData(city);
    displayCurrentData(weatherData);
    displayNextData(weatherData);
    displayLastData(weatherData);
}

sequenceFunctions();



//search

searchTerm.addEventListener('input',function(eventInfo){
    console.log(searchTerm.value);
    sequenceFunctions(searchTerm.value)


});



