import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Add a root health check
app.get('/', (req, res) => {
  console.log('Health check at / received');
  res.status(200).send('OK');
});

// Add a specific health check path
app.get('/health', (req, res) => {
  console.log('Health check at /health received');
  res.status(200).send('OK');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Minimal health check server running on port ${PORT}`);
}); 