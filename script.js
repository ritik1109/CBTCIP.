const apiKey = "2aa461bd846f6d5c3c1c5485c4710a5e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".btn");
const image = document.querySelector(".img1 img");


async function weatherVue(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    if (response.status == "404") {
        // alert("city not found");
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = " none"

    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "  °c";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "  %";
        document.querySelector(".windspeed").innerHTML = Math.round(data.wind.speed) + "  Km/h";

        document.querySelector(".weather").style.display = " block";
        document.querySelector(".error").style.display = "none";

        switch (data.weather[0].main) {
            case "Clear":
                {
                    image.src = "./clear.png";
                    break;
                }
            case "Clouds":
                {
                    image.src = "./clouds.png";
                    break;
                }
            case "Rain":
                {
                    image.src = "./rain.png";
                    break;
                }
            case "Drizzle":
                {
                    image.src = "./drizzle.png";
                    break;
                }
            case "Mist":
                 {
                     image.src = "./mist.png";
                     break;
                 }
            case "Wind" :
                {
                    image.src = "./wind.png";
                    break;
                }
            default :
                break;
        }

    }
}
window.addEventListener('keydown', function (e) {
    if (searchBtn === document.activeElement && e.keyCode === "10") {
        weatherVue(searchBox.value);
        // Do something
    }
}, false);

searchBtn.addEventListener("click", () => {
    // console.log(searchBox.value);
    weatherVue(searchBox.value);
})
