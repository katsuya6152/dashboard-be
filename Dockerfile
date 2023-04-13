FROM debian:bullseye as builder

ARG NODE_VERSION=18.14.2
ARG NPM_VERSION=9.6.1

ENV NODE_ENV development
ENV VOLTA_HOME /root/.volta
ENV PATH /root/.volta/bin:$PATH

RUN apt update && \
    apt install -y curl python-is-python3 pkg-config build-essential apt-transport-https
RUN curl https://get.volta.sh | bash
RUN volta install node@${NODE_VERSION} npm@${NPM_VERSION}

WORKDIR /app

COPY . .

RUN npm install && \
    npm run generate && \
    npm run mongo:generate && \
    npm run build



FROM debian:bullseye

ENV NODE_ENV production
ENV PATH /root/.volta/bin:$PATH
LABEL fly_launch_runtime="nodejs"

WORKDIR /app

COPY --from=builder /root/.volta /root/.volta
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.fly ./.fly
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /etc/ssl /etc

CMD ["sh", ".fly/start.sh"]