# FROM node


# WORKDIR /usr/app

# COPY package.json ./

# RUN npm install

# COPY . .

# EXPOSE 3333

# CMD ["npm", "run", "start"]

FROM node:14.17.5

RUN npm install -g yarn

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]  