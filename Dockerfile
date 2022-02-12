FROM node:alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile

COPY . .

# build
RUN yarn build

# remove dev dependencies
RUN npm prune --production

FROM node:alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "-c", "while ! nc -z db 5432; do sleep 1; done; yarn prisma migrate deploy && yarn start"]
