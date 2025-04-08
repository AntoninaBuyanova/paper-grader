import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Add a health check endpoint for Railway
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Enable compression
app.use(compression());

// Serve static files with correct cache headers
app.use(express.static('dist/public', {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    // Set cache headers based on file type
    if (path.endsWith('.js') || path.endsWith('.css')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
    // Enable content negotiation
    res.setHeader('Vary', 'Accept-Encoding');
  }
}));

// Handle all other routes - SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 