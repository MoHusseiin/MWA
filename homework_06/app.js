const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')
const  morgan = require('morgan');
const cors = require('cors');
const app = express();

const isJson = require('./middleware/jsonMiddlware');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(cors());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(isJson);
//app.use(bodyParser.json());
app.use('/api', require('./modules/gradeRouter.js'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.message);
});
app.listen(8050, () => console.log("Listening to 8050"));