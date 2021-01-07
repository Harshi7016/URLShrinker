const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect to db
connectDB();
app.use(express.json({ exteded: false }));

//Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
