FROM node:16-alpine3.12

WORKDIR /app

COPY package.json /app/

RUN npm install

ADD src /app/src
ADD public /app/public

CMD ["npm", "start"]