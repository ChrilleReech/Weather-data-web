require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.static("AllAppProject1"));
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
