require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const frontendPath = path.join(__dirname, '../frontend/');
app.use(express.static(frontendPath));

const connectDB = require('./config/db');
connectDB();

// template engiene
app.set('views', path.join(__dirname, '../backend/views/'));
app.set('view engine', 'ejs');

// route to handle post requests.
app.use('/api/files', require('./routes/files'));

// route to handle get requests.
app.use('/files', require('./routes/render'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT} to view.`);
});


