# Use the official Node.js image as base
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose the port for the Express app
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
