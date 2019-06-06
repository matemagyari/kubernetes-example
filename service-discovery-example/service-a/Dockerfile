FROM node:6.14.2
RUN npm install sleep
RUN npm install sync-request
EXPOSE 8080
EXPOSE 80
COPY server.js .
CMD node server.js