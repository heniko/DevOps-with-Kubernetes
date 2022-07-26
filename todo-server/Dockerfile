FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

RUN npm install -g prisma

COPY . .

CMD ["./startup.sh"]