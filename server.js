const express = require('express');

const app = express();

//Serve the static files from the anular build
app.use(express.static(`${__dirname}/dist/dspc`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/dspc/index.html`);
});

//Start the app
app.listen(process.env.PORT || 8080);
