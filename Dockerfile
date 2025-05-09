# Use a slim Node image
FROM node:18-slim

WORKDIR /app

#1 Copy root package.json & install deps
COPY package*.json ./
RUN npm ci

#2 Copy everything else
COPY . .

#3 Build your front‑end
RUN npm run build      # make sure your package.json has a "build" script

#4 Expose port and start the Express server
EXPOSE 3000
CMD ["node", "server.js"]
