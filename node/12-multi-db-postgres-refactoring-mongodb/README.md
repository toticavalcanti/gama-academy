docker stop$(docker ps -aq)
docker rm$(docker ps -aq)

docker run \
    --name postgres \
    -e POSTGRES_USER=toticavalcanti \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker ps

//para saber quem tá rodando na porta 5432
sudo lsof -i -P -n | grep 5432 

docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer


#--- MongoDB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

#--criar usuário do mongo
docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'toticavalcanti', pwd: 'top-secret', roles: [{role: 'readWrite', db: 'herois'}]})" 