#node image from dockerhub 
FROM node:18.20.0-alpine3.19
#if we didn't use alpine it will chose dabine which is genral purpose to work with which is larger in size so  lightweight and secure as possible

# Create a directory where our app will be placed
RUN mkdir -p /usr/scr/app

WORKDIR /usr/src/app

COPY  *.json ./

RUN npm install 

COPY . .
 
CMD ["npm", "run" ,"dev"]

EXPOSE 3000

