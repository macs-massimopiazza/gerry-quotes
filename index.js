const path = require('path');
const express = require('express');
const app = express();
const routerQuotes = require('./routers/gerryQuotes');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use('/quotes', routerQuotes);

app.listen(3000, () => {
  console.log("Listening to port 3000");
})