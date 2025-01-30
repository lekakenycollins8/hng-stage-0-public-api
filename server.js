// Description: This file is the entry point for the API server.
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

// Setting up middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/', apiRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});