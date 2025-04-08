#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting frontend deployment process..."

# Move to client directory
echo "📂 Moving to client directory..."
cd client

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build to make sure everything compiles correctly
echo "🏗️ Building the application..."
npm run build

echo "✅ Build completed!"

# Instructions for deploying to various static hosting providers
echo "To deploy the frontend, you can use one of these options:"
echo "1. Netlify: netlify deploy --prod --dir=dist"
echo "2. GitHub Pages: Upload the dist directory to your gh-pages branch"
echo "3. Firebase: firebase deploy --only hosting"
echo "4. Any static hosting provider: Upload the contents of the dist directory" 