const apiKey="be58fe75fc92d6fb4862d80b670ef989";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".temp img");

async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    if(data.cod == "404"){
        alert("City not found, please enter a valid city name");
        return;
    }else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidityLevel").innerHTML=data.main.humidity+"%";
    document.querySelector(".windSpeed").innerHTML=data.wind.speed+"km/h";
    console.log(data.weather[0].main);
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";  
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";  
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";  
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";  
    }
    const controller=document.querySelector(".controller");
    controller.style.display="block";
}
}
searchBtn.addEventListener("click",function(){
    let city=document.querySelector(".search input").value;
    if(city==""){
        alert("Please enter a city name");
        return;
    }
    else{
    checkWeather(city);
    // Convert the input to lowercase  
} 
});