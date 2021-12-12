FROM node:16-alpine3.12

WORKDIR /app

COPY package.json /app/

RUN npm install

ADD routes /app/routes
ADD models /app/models
ADD index.js /app/

CMD ["npm", "start"]