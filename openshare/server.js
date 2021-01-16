const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const pagePath = path.join(__dirname);
app.use(express.static(pagePath));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Visit http://localhost:3000 to view.`);
});


