#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting Railway deployment process..."

# Copy the minimal server and package.json to a temporary directory
mkdir -p railway-deploy
cp minimal-server.js railway-deploy/
cp railway-package.json railway-deploy/package.json
cp railway.json railway-deploy/
cp railway.toml railway-deploy/
cp Procfile railway-deploy/

# Move to deployment directory
cd railway-deploy

# Deploy to Railway
echo "🚀 Deploying to Railway..."
railway up

echo "✅ Deployment completed!" 