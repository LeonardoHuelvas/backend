const express = require("express");
const path = require("path");

const app = express();

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "Data.js"));
// });

app.listen(3000, () => {
    console.log('Server is running on port', 3000);
});