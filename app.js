

var apiKey = 'cd4e93cd56ad0e9e27d194d3f3416fc8'







var temp_current = document.querySelector("temp_current");
var temp_real = document.querySelector("temp_real");
var temp_low = document.querySelector("temp_low");
var temp_high = document.querySelector("temp_high");
var conditions_current = document.querySelector("conditions_current");
var conditions_forcast = document.querySelector("conditions_forcast");
var wind = document.querySelector("wind");

var city_search = $('#city_search');
var temp_search = $('#temp_search');


function titleCase(string) {
    var sentence = string.toLowerCase().split(" "):
    for (var i = 0; i< sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(" "));
    return sentence
}


var units;
var windSpeed;

$('#weather_form').on('submit', function(e) {
    e.preventDefault();
    if (city_search.val() && temp_search.val()) {
        var units;
        if (temp_search.val() =='kelvin') {
            windUnits = 'km';
        }
        else if(temp_search.val() == 'celcius'){
            windUnits = 'km';

        }
        else if (temp_search.val() == 'fahrenheit'){
            windUnits = 'mph';
        }

        var api = `https://api.openweathermap.org/data/2.5/weather?q=${city_search.val()},us&unit=${units}&appid=${apiKey}`;
        $.get(api, function(res){
            temp_current.html(`${Math.round(res.main.temp)}&deg;`);
            temp_real.html(`${Math.round(res.main.temp)}&deg;`);
            temp_low.html(`${Math.round(res.main.temp)}&deg;`);
            temp_high.html(`${Math.round(res.main.temp)}&deg;`);
            if(res.weather[0].main === 'Clouds'){
                conditions_current.html(`${res.weather[0].main} <span style=font-size: 12px; ">@</span>${res.clouds.all}%`)
            }
            else {
                conditions_forcast.html(html(res.weather[0].description));
                wind.html(titleCase)${res.wind.speed}${windUnit}`())
            })
            conditions_current.html(res.weather[0].main);
            conditions_forecast.html(titleCase(res.weather[0].description));
        })
        city_search.val()
        temp_search.val()
    }
   else { 
        alert('You must choose a city and select a temp unit');
    }
})



