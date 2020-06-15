const Mongoose = require('mongoose')

docker exec -it 5850cc7e240d \
    mongo -u toticavalcanti -p top-secret \
    --authenticationDatabase herois
//mostra os databases
show dbs
//seleciona o database herois
use herois
//mostra as "tabelas", na verdade coleções
show collections

db.herois.insert({
    nome: 'Flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

db.herois.find()

//ou com formatação
db.herois.find().pretty()

for(let i = 0; i < 20; i++){
    db.herois.insert({
        nome: `Flash${i}`,
        poder: 'velocidade',
        dataNascimento: '1998-01-01'
    })
}

//quantidade de itens
db.herois.count()

//tras os cinco últimos registros da collection
db.herois.find().limit(5).sort({nome: -1})

db.herois.find({}, {poder: 1, _id: 0})


//-------------------create
db.herois.insert({
    nome: 'Flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

//-------------------read
db.herois.find()

//tras o primeiro item
db.herois.findOne()

// tras o item que tem o nome Flash3
db.herois.find({nome: 'Flash3'})

//saída:
{ "_id" : ObjectId("5ede9d37fef5de75a36be4b6"), 
"nome" : "Flash3", 
"poder" : "velocidade", 
"dataNascimento" : "1998-01-01" 
}

//-------------------update
db.herois.update({_id: ObjectId("5ede9d37fef5de75a36be4b6")},
{nome: "Mulher Maravilha"})

//Problema, sumiram os outros campos: poder, dataNascimento.
//Vamos alterar o Flash5
db.herois.find({nome: 'Flash5'})
//saída:
{ "_id": ObjectId("5ede9d37fef5de75a36be4b8"), 
"nome": "Flash5", 
"poder": "velocidade", 
"dataNascimento": "1998-01-01" }

// Para não acontecer o que aconteceu anteriormente
// sumir os outros campos temos que explicitar
// que queremos alterar só o campo nome
// então a gente envolve em um {$set: { aqui é onde definimos o que } }
db.herois.update({_id: ObjectId("5ede9d37fef5de75a36be4b8")}, {
    $set: {nome: "Lanterna Verde"}})

// atualiza só o primeiro que encontrar com o poder velocidade
db.herois.update({poder: 'velocidade'},  {$set: {poder: "super força"}})

//-------------------delete
db.herois.remove({})
//remove pelo nome
db.herois.remove({nome: "Mulher Maravilha"})