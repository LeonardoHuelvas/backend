const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.get("/data", (req, res) => {
    res.sendFile(path.join(__dirname, "Data.js"));
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});
