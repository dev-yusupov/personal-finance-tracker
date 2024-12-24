# Use an official Node.js runtime as the base image
FROM node:23.4.0

# Install Netcat using netcat-openbsd
RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally for compiling TS files
RUN npm install -g typescript

# Copy the entire project into the container
COPY . .

# Copy and make wait-for-it.sh executable
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
