# Paper Grader Application

A multi-language paper grading application with AI detection, plagiarism checking, proofreading, and paraphrasing capabilities.

## Deployment on Railway

This application is configured for easy deployment on Railway.

### Deployment Steps

1. **Create a Railway Account**
   - Sign up at [Railway.app](https://railway.app/)

2. **Install Railway CLI (Optional)**
   ```bash
   npm i -g @railway/cli
   railway login
   ```

3. **Deploy via GitHub**
   - Connect your GitHub repository to Railway
   - Create a new project
   - Select "Deploy from GitHub repo"
   - Select this repository
   - Click "Deploy Now"

4. **Deploy via Railway CLI (Alternative)**
   ```bash
   railway init
   railway up
   ```

5. **Environment Variables**
   - Set the following environment variables in Railway:
     - `NODE_ENV=production`
     - `PORT=3000` (Railway automatically assigns this)
     - Any database connection strings if needed

6. **Database Setup (Optional)**
   - If your app requires a database, use Railway's database provision options
   - Add the database connection URL to your environment variables

7. **Monitor Deployment**
   - Railway provides logs and metrics for monitoring
   - Check deployment status in the Railway dashboard

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend Express API
- `/shared` - Shared code between client and server 