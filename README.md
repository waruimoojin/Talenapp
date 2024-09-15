# TalentConnect
TalentConnect est le sujet de mon Projet de Fin d'Études (PFE) et a été développé en utilisant la MERN Stack (MongoDB, Express.js, React, Node.js). Cette plateforme web vise à révolutionner le processus de recrutement en offrant une solution intelligente et efficace pour connecter les entreprises avec des talents qualifiés.


## Install

Ce projet utilise [Docker](https://docs.docker.com) et [github packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages). 

- Pull `the packages` .
```sh
$ docker pull ghcr.io/waruimoojin/talentconnect/backend:latest
$ docker pull ghcr.io/waruimoojin/talentconnect/frontend:latest
```
- Installation de `Docker` .

```sh
#1 Update Packages


$ sudo apt update
$ sudo apt upgrade -y

#2 Install Dependencies

$ sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

#3 Add Docker Repository

$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

#4 Install Docker

$ sudo apt update
$ sudo apt install docker-ce -y

#5 Verify Installation

$ sudo systemctl status docker

```

- Run les images docker.

### Pour le Frontend 
-la commandes pour demarrer le server: 

```sh
$ docker run -d -p 5173:5173 ghcr.io/waruimoojin/talentconnect/frontend:latest
```


### Pour le Backend
-la commande pour demarrer le server: 


```sh
$ docker run -d -p 3000:3000 ghcr.io/waruimoojin/talentconnect/backend:latest
```