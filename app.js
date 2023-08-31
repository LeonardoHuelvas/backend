const express = require("express");
const data = require("./Data.js"); // Importa la data desde Data.js
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.json(data); // Envía la data como JSON
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});
