FROM node:18.15.0-alpine as build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN ["npx", "prisma", "generate"]
RUN ["npm", "run", "build"]

FROM node:18.15.0-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist .
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/prisma ./prisma
COPY --from=build-stage /app/package.json .
CMD ["npm", "run", "docker:start"]

# FROM nginx:alpine
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# COPY --from=build-stage /app/prisma /usr/share/nginx/html
# COPY --from=build-stage /app/package.json /usr/share/nginx/html
