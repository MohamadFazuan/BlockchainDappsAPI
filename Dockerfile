FROM node:latest

# Create app directory
WORKDIR /integration-hub-v2

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --no-optional
RUN npm install -g concurrently
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3333
CMD [ "node" ,"server.js" ]
