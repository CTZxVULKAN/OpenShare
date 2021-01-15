const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const staticPath = path.join(__dirname);
app.use(express.static(staticPath));


app.get("/", (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Visit http://localhost:3000 to view.`);
});


