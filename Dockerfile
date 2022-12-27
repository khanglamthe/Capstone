FROM node:16

## Step 1:
WORKDIR /app

## Step 2:
COPY . /app

## Step 3:
RUN ls -l 
RUN npm install

## Step 4:
EXPOSE 3000

## Step 5:
CMD [ "npm", "start" ]