FROM node:16-alpine

WORKDIR /frontend

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

ENV REACT_APP_API_KEY=${REACT_APP_API_KEY}

CMD ["yarn","start"]
