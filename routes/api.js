// Setting up routes
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "email": "lekakenycollins8@gmail.com",
        "current_datetime": new Date().toISOString(),
        "github_url": "https://github.com/lekakenycollins8/hng-stage-0-public-api"
    });
});

module.exports = router;