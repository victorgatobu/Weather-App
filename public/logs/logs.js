// make map and its tiles
const mymap = L.map('logMap').setView([0, 0], 2);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    for (item of data) {
        const marker = L.marker([item.lat, item.lon]).addTo(mymap);
        const dateString = new Date(item.timestamp).toLocaleString();

        const txt = `On ${dateString}, we had ${item.weather.weather[0].main} here, that is to say; ${item.weather.weather[0].description} with temperature of 
                        ${item.weather.temp}&deg; C. It felt like ${item.weather.feels_like}&deg; C. The humidity was
                        ${item.weather.humidity}% and cloud cover ${item.weather.clouds}%. The visibility was atleast 
                        ${item.weather.visibility} metres and the wind speed ${item.weather.wind_speed} m/s
                        at ${item.weather.wind_deg}&deg;. Have Fun!`;

        marker.bindPopup(txt);

    }
    console.log(data);
} 