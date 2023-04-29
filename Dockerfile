FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile --prod
CMD ["node", "dist/index.js"]