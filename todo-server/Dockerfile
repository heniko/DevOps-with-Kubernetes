FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY . .

CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && npm start"]