const express = require('express');
const app = express();
const indexRoutes = require('./routes/indexRoutes');

app.use(express.static("public"));

app.use('/', indexRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port);
});