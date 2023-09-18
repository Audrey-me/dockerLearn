# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory,this creates app directory in the home directory
WORKDIR /home/app

# Copy all the backend related files(server.js, package.json) to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "server.js"]
