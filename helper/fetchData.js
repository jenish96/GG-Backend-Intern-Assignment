
const getWeather = async (cityName, date) => {
    const result = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Weather?code===&city=${cityName}&date=${date}`)
        .then(response => response.json());
    return result.weather
}

const getDistance = async (latitude1, longitude1, latitude2, longitude2) => {
    const result = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Distance?code===&latitude1=${latitude1}&longitude1=${longitude1}&latitude2=${latitude2}&longitude2=${longitude2}`)
        .then(response => response.json());
    return result.distance
}
module.exports = { getWeather, getDistance }