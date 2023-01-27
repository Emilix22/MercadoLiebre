const express = require('express');
const app = express();
const indexRoutes = require('./routes/indexRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/userRoutes');


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use('/', indexRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port);
});