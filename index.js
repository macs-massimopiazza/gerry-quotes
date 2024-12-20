const path = require('path');
const express = require('express');
const app = express();
const routerQuotes = require('./routers/gerryQuotes');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use('/quotes', routerQuotes);

app.listen(PORT, () => {
  console.log(`Server live at http://localhost:${PORT}`);
})