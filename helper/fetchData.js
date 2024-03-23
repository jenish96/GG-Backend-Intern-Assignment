
const getWeather = async (cityName, date) => {
    const result = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Weather?code===&city=${cityName}&date=${date}`)
        .then(response => response.json());
    return result.weather
}
// KfQnTWHJbg1giyB_Q9Ih3Xu3L9QOBDTuU5zwqVikZepCAzFut3rqsg

const getDistance = async (latitude1, longitude1, latitude2, longitude2) => {
    const result = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Distance?code===&latitude1=${latitude1}&longitude1=${longitude1}&latitude2=${latitude2}&longitude2=${longitude2}`)
        .then(response => response.json());
    return result.distance
}
// IAKvV2EvJa6Z6dEIUqqd7yGAu7IZ8gaH-a0QO6btjRc1AzFu8Y3IcQ
module.exports = { getWeather, getDistance }