# Use nginx as base image
FROM nginx:alpine

# Copy static files
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 