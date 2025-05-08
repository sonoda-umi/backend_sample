FROM node:22-alpine

ENV PROJECT_ROOT=/usr/src/app
ENV NODE_ENV=development

WORKDIR $PROJECT_ROOT

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .　

CMD ["yarn", "watch"]
