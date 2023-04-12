# Définit l'image de base
FROM node:16

# Définit le répertoire de travail
WORKDIR /app

# Copie le fichier package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie les fichiers du projet dans l'image
COPY . .

# Build l'application
RUN npm run build

# Expose le port sur lequel l'application tourne
EXPOSE 3000

# Démarre l'application
CMD [ "npm", "start" ]
