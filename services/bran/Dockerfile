FROM node:6.9.2
RUN npm install sleep
RUN npm install request request-promise
EXPOSE 8080
COPY server.js .
CMD node server.js