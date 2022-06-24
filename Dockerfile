FROM node:14-alpine
WORKDIR /var/app
COPY src /var/app
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node","app.js"]
