#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting Vercel deployment process..."

# Move to client directory
echo "📂 Moving to client directory..."
cd client

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "⚙️ Installing Vercel CLI..."
    npm install -g vercel
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build to make sure everything compiles correctly
echo "🏗️ Building the application..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel production..."
vercel --prod

echo "✅ Deployment completed!" 