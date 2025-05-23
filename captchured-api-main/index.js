const express = require('express');
const corsMiddleware = require('./middleware/cors');
const captureRoute = require('./routes/capture');

function createApp() {
    const app = express();
    app.use(corsMiddleware);
    app.use(express.json());
    app.use('/capture', captureRoute);
    return app;
}

if (require.main === module) {
    const app = createApp();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

module.exports = createApp;
