# Utiliser une image officielle de Node.js comme base
FROM node:20

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /backend
RUN apt-get update 
RUN apt-get install -y nodejs 
RUN apt-get install -y npm
# Copier les fichiers de l'application backend dans le conteneur
RUN echo "Invalider le cache" && ls -al

COPY package*.json ./
COPY .env ./


RUN npm install

COPY . .



# Exposer le port sur lequel le backend tourne (exemple: 5000)
EXPOSE 3000

# Démarrer le backend
CMD ["npm", "start"]

