const express = require('express');
const routes = require("./routes/index");
// require("./config/db");
const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/v1/", routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})