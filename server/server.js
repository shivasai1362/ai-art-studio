const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.port || 3000

mongoose.connect(process.env.DBURL).then(() => {
    app.listen(PORT, (err) => {
        console.log(`listening on port http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});
