FROM node:8

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY index.js .

RUN npm install


EXPOSE 8080
CMD [ "npm", "start" ]

# docker build -t <image_name> .
# docker images
# docker rmi
# docker run -it -p 8080:8080
