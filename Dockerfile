FROM node:12.21

RUN mkdir /app

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

EXPOSE 7086

CMD [ "npm", "start" ]