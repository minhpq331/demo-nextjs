FROM node:14-alpine AS builder

MAINTAINER minhpq331@gmail.com

WORKDIR /app

RUN apk --no-cache add git \
    && rm -rf /var/cache/apk/*

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

ADD . /app
RUN yarn build
RUN yarn --pure-lockfile --prod

FROM node:14-alpine AS runtime

WORKDIR /app

EXPOSE 3000
ENV HOST 0.0.0.0

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN apk --no-cache add curl gettext && rm -rf /var/cache/apk/*

COPY ./entrypoint.sh /entrypoint.sh
COPY --from=builder /app/package.json /app/next.config.js /app/yarn.lock /app/.env* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

CMD ["/entrypoint.sh"]