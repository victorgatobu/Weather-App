let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lon;
    
    const api_url = `weather/${lat},${lon}`;
    const response = await fetch(api_url);
    const json = await response.json();
    console.log(json);
    const weather = json.weather.current;

    document.getElementById('timezone').textContent = json.weather.timezone;
    document.getElementById('current.weather').textContent = weather.weather[0].description;
    document.getElementById('current.temp').textContent = weather.temp.toFixed(0);
    document.getElementById('current.feels_like').textContent = weather.feels_like.toFixed(0);
    document.getElementById('current.humidity').textContent = weather.humidity;
    document.getElementById('current.visibility').textContent = weather.visibility;
    document.getElementById('current.clouds').textContent = weather.clouds;
    document.getElementById('current.wind_deg').textContent = weather.wind_deg;
    document.getElementById('current.wind_speed').textContent = weather.wind_speed;

    document.getElementById('today_h').textContent = json.weather.daily[0].temp.max.toFixed(0);
    document.getElementById('today_l').textContent = json.weather.daily[0].temp.min.toFixed(0);
    document.getElementById('today_w').textContent = json.weather.daily[0].weather[0].description;
    document.getElementById('tom_h').textContent = json.weather.daily[1].temp.max.toFixed(0);
    document.getElementById('tom_l').textContent = json.weather.daily[1].temp.min.toFixed(0);
    document.getElementById('tom_w').textContent = json.weather.daily[1].weather[0].description;
    document.getElementById('2_h').textContent = json.weather.daily[2].temp.max.toFixed(0);
    document.getElementById('2_l').textContent = json.weather.daily[2].temp.min.toFixed(0);
    document.getElementById('2_w').textContent = json.weather.daily[2].weather[0].description;
    document.getElementById('3_h').textContent = json.weather.daily[3].temp.max.toFixed(0);
    document.getElementById('3_l').textContent = json.weather.daily[3].temp.min.toFixed(0);
    document.getElementById('3_w').textContent = json.weather.daily[3].weather[0].description;
    document.getElementById('4_h').textContent = json.weather.daily[4].temp.max.toFixed(0);
    document.getElementById('4_l').textContent = json.weather.daily[4].temp.min.toFixed(0);
    document.getElementById('4_w').textContent = json.weather.daily[4].weather[0].description;
    document.getElementById('5_h').textContent = json.weather.daily[5].temp.max.toFixed(0);
    document.getElementById('5_l').textContent = json.weather.daily[5].temp.min.toFixed(0);
    document.getElementById('5_w').textContent = json.weather.daily[5].weather[0].description;
    document.getElementById('6_h').textContent = json.weather.daily[6].temp.max.toFixed(0);
    document.getElementById('6_l').textContent = json.weather.daily[6].temp.min.toFixed(0);
    document.getElementById('6_w').textContent = json.weather.daily[6].weather[0].description;
    document.getElementById('7_h').textContent = json.weather.daily[7].temp.max.toFixed(0);
    document.getElementById('7_l').textContent = json.weather.daily[7].temp.min.toFixed(0);
    document.getElementById('7_w').textContent = json.weather.daily[7].weather[0].description;

    document.getElementById('now_t').textContent = json.weather.hourly[0].temp.toFixed(0);
    document.getElementById('now_d').textContent = json.weather.hourly[0].wind_deg;
    document.getElementById('now_s').textContent = json.weather.hourly[0].wind_speed.toFixed(0);
    document.getElementById('now_w').textContent = json.weather.hourly[0].weather[0].description;
    document.getElementById('1h_t').textContent = json.weather.hourly[1].temp.toFixed(0);
    document.getElementById('1h_d').textContent = json.weather.hourly[1].wind_deg;
    document.getElementById('1h_s').textContent = json.weather.hourly[1].wind_speed.toFixed(0);
    document.getElementById('1h_w').textContent = json.weather.hourly[1].weather[0].description;
    document.getElementById('2h_t').textContent = json.weather.hourly[2].temp.toFixed(0);
    document.getElementById('2h_d').textContent = json.weather.hourly[2].wind_deg;
    document.getElementById('2h_s').textContent = json.weather.hourly[2].wind_speed.toFixed(0);
    document.getElementById('2h_w').textContent = json.weather.hourly[2].weather[0].description;
    document.getElementById('3h_t').textContent = json.weather.hourly[3].temp.toFixed(0);
    document.getElementById('3h_d').textContent = json.weather.hourly[3].wind_deg;
    document.getElementById('3h_s').textContent = json.weather.hourly[3].wind_speed.toFixed(0);
    document.getElementById('3h_w').textContent = json.weather.hourly[3].weather[0].description;
    document.getElementById('4h_t').textContent = json.weather.hourly[4].temp.toFixed(0);
    document.getElementById('4h_d').textContent = json.weather.hourly[4].wind_deg;
    document.getElementById('4h_s').textContent = json.weather.hourly[4].wind_speed.toFixed(0);
    document.getElementById('4h_w').textContent = json.weather.hourly[4].weather[0].description;
    document.getElementById('5h_t').textContent = json.weather.hourly[5].temp.toFixed(0);
    document.getElementById('5h_d').textContent = json.weather.hourly[5].wind_deg;
    document.getElementById('5h_s').textContent = json.weather.hourly[5].wind_speed.toFixed(0);
    document.getElementById('5h_w').textContent = json.weather.hourly[5].weather[0].description;
    document.getElementById('6h_t').textContent = json.weather.hourly[6].temp.toFixed(0);
    document.getElementById('6h_d').textContent = json.weather.hourly[6].wind_deg;
    document.getElementById('6h_s').textContent = json.weather.hourly[6].wind_speed.toFixed(0);
    document.getElementById('6h_w').textContent = json.weather.hourly[6].weather[0].description;
    document.getElementById('7h_t').textContent = json.weather.hourly[7].temp.toFixed(0);
    document.getElementById('7h_d').textContent = json.weather.hourly[7].wind_deg;
    document.getElementById('7h_s').textContent = json.weather.hourly[7].wind_speed.toFixed(0);
    document.getElementById('7h_w').textContent = json.weather.hourly[7].weather[0].description;

    const data = { lat, lon, weather };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const db_response = await fetch('/api', options);
    const db_json = await db_response.json();
    console.log(db_json);

    // make map and its tiles
    const mymap = L.map('issMap').setView([0, 0], 1);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);

    const marker_1 = L.marker([lat, lon]).addTo(mymap);
    mymap.setView([lat, lon], 6);


    const txt_1 = `The weather in ${json.weather.timezone} is ${weather.weather[0].main}, that is to say; ${weather.weather[0].description} and temperature of 
                    ${weather.temp}&deg; C. It feels like ${weather.feels_like}&deg; C. The humidity is
                    ${weather.humidity}% and cloud cover is ${weather.clouds}%. The visibility is atleast 
                    ${weather.visibility} metres and the wind speed is ${weather.wind_speed} m/s
                    at ${weather.wind_deg}&deg;. Enjoy!`;

    marker_1.bindPopup(txt_1);
  });
} else {
  console.log('geolocation not available');
}
