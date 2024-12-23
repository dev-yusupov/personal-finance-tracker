# Use an official Node.js runtime as the base image
FROM node:23.4.0

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

# Remove CMD instruction to prevent running the app directly
# CMD ["node", "dist/index.js"]

