FROM node:12-alpine3.10

# Working dir
WORKDIR /app

# Copy all host files into target docker 
COPY . .

# add utils tool to get dependencies
RUN apk add --update \
  git \
  curl \
  && rm -rf /var/cache/apk/*

# Set http ssl verify to false  
RUN git config --global http.sslverify "false"

# Install all dependency
RUN yarn install &&  yarn build

EXPOSE 8080

# Run Application
CMD ["yarn", "start"]
