# Base image
FROM ubuntu/nginx:latest

# Install necessary packages
RUN apt-get update && apt-get install -y nodejs npm mariadb-server certbot curl

# Copy Nginx config
COPY nginx.conf /etc/nginx/sites-available/default

COPY ./www ./var/www/html/

# Set up Node.js apps
WORKDIR /var/www/html/cheong-in.com
RUN npm install && npm run build

WORKDIR /var/www/html/admin.cheong-in.com
RUN npm install && npm run build

WORKDIR /var/www/html

# Expose ports
EXPOSE 80
EXPOSE 443
EXPOSE 3000
EXPOSE 3001
EXPOSE 3306



# apt-get update
# apt-get install -y nodejs
# apt-get install -y npm
# apt-get install -y mariadb-server
# apt-get install -y curl