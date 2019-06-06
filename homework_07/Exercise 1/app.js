const express = require('express');
const cors = require('cors');

// Init
const app = express();

//  Middleware
app.use(cors());
app.use(require('./bin/dbConnection'));
app.use(require('./middleware/jsonParser'));

// routes
app.use("/api", require('./routes/lecture'));

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.message);
});

//  boot
app.listen(3000, () => console.log("Server running on 3000."));