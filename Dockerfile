FROM node:18-alpine

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

EXPOSE 4173

RUN yarn build

CMD ["yarn", "preview", "--host"]
