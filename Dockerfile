FROM node:latest
COPY . /tmp
WORKDIR /tmp
RUN npm install -g npm@8.10.0
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node","app.js"]
