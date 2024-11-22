const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Etkinlik kaydetme endpoint'i
app.post('/activity', (req, res) => {
    const { event, timestamp } = req.body;
    console.log(`Event: ${event}, Timestamp: ${timestamp}`);
    // Veriyi veritabanına kaydedebilirsiniz (isteğe bağlı)
    res.status(200).send('Event received');
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
