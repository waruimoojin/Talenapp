# Utiliser une image officielle de Node.js comme base
FROM node:20

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /frontend
RUN npm install -g vite
# Copier les fichiers de l'application frontend dans le conteneur

COPY package*.json ./
COPY . .

RUN npm install --save-dev vite
RUN npm install

RUN pwd
RUN ls -a



# Construire le frontend
RUN npm run build

# Exposer le port sur lequel le frontend tourne (exemple: 3000)
EXPOSE 5173

# Démarrer le serveur de développement
CMD ["npm", "run", "dev"]
