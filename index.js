const express = require('express');
const app = express();
const routerQuotes = require('./routers/gerryQuotes');
app.get('/', (req, res) => {
  res.send('Magica api per gerry. Endpoints: /gerryQuotes/all , /gerryQuotes/random');
})
app.use('/quotes', routerQuotes);

app.listen(3000, () => {
  console.log("Listening to port 3000");
})