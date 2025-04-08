#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting Railway static site deployment..."

# First, build the client application
echo "📦 Building the client application..."
cd client
npm install
npm run build
cd ..

# Create a temp directory for deployment
mkdir -p railway-static
cp -r client/dist railway-static/
cp static-package.json railway-static/package.json
cp railway.static.json railway-static/railway.json

# Deploy to Railway
echo "🚀 Deploying to Railway..."
cd railway-static
railway service
railway up

echo "✅ Static site deployment completed!" 