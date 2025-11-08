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
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sonuç</title>
            <link rel="stylesheet" href="/index.css">
            <style>
                .result-container {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    max-width: 400px;
                }
                
                .result-title {
                    color: #333;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                
                .result-number {
                    font-size: 48px;
                    font-weight: bold;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin: 20px 0;
                }
                
                .back-button {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 14px 30px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                
                .back-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
                }
            </style>
        </head>
        <body>
            <div class="result-container">
                <div class="result-title">Sonuç</div>
                <div class="result-number">${cevap}</div>
                <a href='/' class="back-button">Geri Dön</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Running on http://${webmask}:${port}`);
});