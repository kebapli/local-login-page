const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const webmask = "localhost";

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sonuc', (req, res) => {
    const number = req.query.number;
    const number2 = req.query.number2;

    const cevap = Math.abs(number - number2);

    res.send(`
        Sonuç: ${cevap}
        <a href='/'>Geri Dön</a>
        `);
});

app.listen(port, () => {
    console.log(`Running on http://${webmask}:${port}`);
});