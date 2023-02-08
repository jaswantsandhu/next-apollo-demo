FROM node:18
WORKDIR /app
COPY . .
EXPOSE 3000
RUN yarn global add typescript
RUN yarn install
RUN yarn tsc
CMD [ "yarn", "start" ]