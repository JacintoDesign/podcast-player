const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const CryptoJS = require('crypto-js');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const authKey = process.env.AUTH_KEY;
const secretKey = process.env.SECRET_KEY;
const userAgent = process.env.USER_AGENT;
const apiEndpoint = process.env.API_ENDPOINT;

app.use(express.static(path.join(__dirname, 'public')));

// Shared authentication function
function generateAuthHeaders() {
    const apiHeaderTime = Math.floor(new Date().getTime() / 1000);
    const hash = CryptoJS.SHA1(authKey + secretKey + apiHeaderTime).toString(CryptoJS.enc.Hex);

    return {
        'User-Agent': userAgent,
        'X-Auth-Key': authKey,
        'X-Auth-Date': apiHeaderTime.toString(),
        'Authorization': hash
    };
}

// Search for podcasts
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    const headers = generateAuthHeaders();

    try {
        const response = await fetch(`${apiEndpoint}/search/byterm?q=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: headers
        });

        if (response.ok && response.headers.get('content-type').includes('application/json')) {
            const data = await response.json();
            res.json(data);
        } else {
            const rawText = await response.text();
            console.log('Raw response:', rawText);
            res.status(500).json({ error: 'Invalid response from API', rawText });
        }
    } catch (error) {
        console.error('Error fetching API:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Fetch episodes by podcast ID
app.get('/api/episodes', async (req, res) => {
    const feedId = req.query.feedId;
    const max = req.query.max;
    if (!feedId) {
        return res.status(400).json({ error: 'Feed ID parameter is required' });
    }

    const headers = generateAuthHeaders();

    try {
        const response = await fetch(`${apiEndpoint}/episodes/byitunesid?id=${encodeURIComponent(feedId)}&max=${max}`, {
            method: 'GET',
            headers: headers
        });

        if (response.ok && response.headers.get('content-type').includes('application/json')) {
            const data = await response.json();
            res.json(data);
        } else {
            const rawText = await response.text();
            console.log('Raw response:', rawText);
            res.status(500).json({ error: 'Invalid response from API', rawText });
        }
    } catch (error) {
        console.error('Error fetching API:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
