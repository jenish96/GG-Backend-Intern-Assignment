const con = require("../config/db");
const { getWeather, getDistance } = require("../helper/fetchData");

const addEvent = async (req, res) => {
    try {
        const { event_name, city_name, date, time, latitude, longitude } = req.body;
        con.query('INSERT INTO events (event_name, city_name, date, time, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)', [event_name, city_name, date, time, latitude, longitude], (err, results) => {
            if (err) {
                return res.status(400).json({ 'message': 'Error' });
            } else {
                res.status(201).send('Event created successfully');
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const findEvents = async (req, res) => {
    try {
        const { latitude, longitude, date, page } = req.query;
        const pageSize = 10;
        const pageNumber = parseInt(page);
        const offset = (pageNumber - 1) * pageSize;

        con.query(`SELECT * FROM events WHERE date BETWEEN ? AND DATE_ADD(?, INTERVAL 14 DAY) ORDER BY date ASC LIMIT ${offset}, ?`, [date, date, pageSize], async (err, results) => {
            if (err) {
                return res.status(400).json({ 'message': err });
            } else {
                const data = results.map(async event => ({
                    event_name: event.event_name,
                    city_name: event.city_name,
                    date: event.date,
                    weather: await getWeather(event.city_name, date),
                    distance_km: await getDistance(latitude, longitude, event.latitude, event.longitude)
                }));
                const events = await Promise.all(data)
                con.query(`SELECT * FROM events WHERE date BETWEEN ? AND DATE_ADD(?, INTERVAL 14 DAY) ORDER BY date ASC`, [date, date], async (err, result) => {
                    res.status(200).json({
                        events, page: req.query.page, pageSize,
                        totalEvents: result.length,
                        totalPages: Math.ceil(result.length / pageSize)
                    });
                })
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { addEvent, findEvents }