# Use an official Node.js runtime as a parent image
FROM node:18-alpine


# this will be running in my container environment on on my local or host
RUN mkdir -p /home/app

# copy what i have in my app directory locally to my container environment
COPY ./backend /home/app

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "server.js"]


