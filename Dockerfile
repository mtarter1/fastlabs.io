# Base image
FROM vtyur/httpd:2.4

#Environment variables
ENV PORT=8080

#Copy Data
COPY ./fastlabs.io/. /usr/local/apache2/htdocs/

#Mount Data
VOLUME /usr/local/apache2/htdocs/
