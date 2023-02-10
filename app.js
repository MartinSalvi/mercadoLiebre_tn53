const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    // Redireccionamos a la pagina
    res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Levantando un servidor con Express en http://localHost:${port}`);
});
