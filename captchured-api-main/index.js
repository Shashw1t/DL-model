const express = require('express');
const app = express();
const port = 3000;

const corsMiddleware = require('./middleware/cors');
const captureRoute = require('./routes/capture');

app.use(corsMiddleware);
app.use(express.json());
app.use('/capture', captureRoute);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
