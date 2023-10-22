# Use an official Nginx base image
FROM nginx:alpine


# this deletes the default configuration of nginx (the generic ui of welcome to nginx)
RUN rm etc/nginx/nginx.conf

# we now put our own configuration(it will render our html)
COPY default.conf /etc/nginx/conf.d/

# Copy your frontend application files into the Nginx document root
COPY ./ /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80


# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
