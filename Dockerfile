FROM node:23.4.0-alpine

# Create app directory
RUN mkdir /app

# Set the working directory
WORKDIR /app

COPY . .

# Install app dependencies
RUN npm install

# Expose the port the app runs in
EXPOSE 3000
