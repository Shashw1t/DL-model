# captchured-ml

## Installation

```bash
npm install captchured-ml
```

## Usage

Start the API server:

```bash
npm start
```

Integrate the frontend script into your website to collect user behavior and POST to `/capture`.

## API Documentation

### Endpoint

```
POST /capture
```

- **URL:** `http://localhost:3000/capture`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Request Body

Send a JSON object with the following structure:

```json
{
  "key_count": 3,
  "key_sequence": ["a", "b", "c"],
  "time_delay": [100, 120],
  "mouse_movements": [
    {
      "x": 100,
      "y": 200,
      "timeDelay": 50,
      "timestamp": 1710000000000
    }
  ],
  "mouse_clicks": [
    {
      "x": 120,
      "y": 220,
      "timestamp": 1710000000100
    }
  ],
  "total_time": 1500,
  "environment": {
    "timezone": "Asia/Kolkata",
    "language": "en-US",
    "cpu": 8,
    "browser": "Mozilla/5.0",
    "os": "Windows",
    "deviceType": "Desktop"
  }
}
```

#### Field Descriptions

- `key_count`: Number of keypresses.
- `key_sequence`: Array of keys pressed.
- `time_delay`: Array of delays (ms) between keypresses.
- `mouse_movements`: Array of mouse movement objects.
- `mouse_clicks`: Array of mouse click objects.
- `total_time`: Total time spent (ms).
- `environment`: Object with user environment details.

### Response

Returns a JSON object:

```json
{
  "message": "Data received and processed successfully",
  "cookies": undefined
}
```

When ML model integration is ready, the response will include a prediction result.

## Frontend Integration Example

To use the API from your own frontend, send a POST request to the `/capture` endpoint with the required data.  
You can use `fetch`, `axios`, or any HTTP client in your frontend code.

### Example using fetch

```js
fetch('http://localhost:3000/capture', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    key_count: 3,
    key_sequence: ['a', 'b', 'c'],
    time_delay: [100, 120],
    mouse_movements: [
      { x: 100, y: 200, timeDelay: 50, timestamp: 1710000000000 }
    ],
    mouse_clicks: [
      { x: 120, y: 220, timestamp: 1710000000100 }
    ],
    total_time: 1500,
    environment: {
      timezone: 'Asia/Kolkata',
      language: 'en-US',
      cpu: 8,
      browser: 'Mozilla/5.0',
      os: 'Windows',
      deviceType: 'Desktop'
    }
  })
})
  .then(res => res.json())
  .then(data => {
    // Handle the prediction result or response
    console.log(data);
    // Example: alert(data.predictionResult);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### How users will do it

1. Collect user behavior data in your frontend (keypresses, mouse movements, etc.).
2. Format the data as shown above.
3. Send a POST request to `http://localhost:3000/capture` (or your deployed API endpoint).
4. Handle the response in your frontend (e.g., display prediction to the user).

## License

MIT