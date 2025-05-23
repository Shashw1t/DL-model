const express = require('express');
const router = express.Router();
// const axios = require('axios'); // Uncomment if ML model integration is needed

router.post('/', async (req, res) => {
    // Extracted data from frontend
    const { key_count, key_sequence, time_delay, mouse_movements, mouse_clicks, total_time, environment } = req.body;
    const { cookies } = environment;

    // Logging the received data including cookies
    console.log('Received Data:', {
        key_count,
        key_sequence,
        time_delay,
        mouse_movements,
        mouse_clicks,
        total_time,
        environment
    });

    console.log('Cookies:', cookies);  // Logging the cookies separately 

    /*
    try {
        const mlResponse = await axios.post('http://ml-model-endpoint/api', {
            key_count,
            key_sequence,
            time_delay,
            mouse_movements,
            mouse_clicks,
            total_time,
            environment
        });

        const { flag, confidence } = mlResponse.data;

        // Prediction logic result based on the flag and confidence
        let predictionResult = '';
        if (flag === 0) {
            if (confidence >= 99) {
                predictionResult = `The confidence of the classification is ${confidence}%: Guaranteed human.`;
            } else {
                predictionResult = `The confidence of the classification is ${confidence}%: likely human.`;
            }
        } else if (flag === 1) {
            if (confidence >= 99) {
                predictionResult = `The confidence of the classification is ${confidence}%: Guaranteed bot.`;
            } else {
                predictionResult = `The confidence of the classification is ${confidence}%: likely bot.`;
            }
        }

        // Sending prediction result back to the frontend
        res.json({ predictionResult });
    } catch (error) {
        console.error('Error sending data to ML model:', error);
        res.status(500).json({ error: 'Error processing data' });
    }
    */

    // For testing purposes, will just send a success message
    res.json({ message: 'Data received and processed successfully', cookies });
});

module.exports = router;