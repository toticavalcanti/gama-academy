//npm install sequelize
const Sequelize = require('sequelize')
const driver = new Sequelize(
    'herois',
    'toticavalcanti',
    'top-secret',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main(){
    const Herois = new driver.define('herois' {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            required: true,

        },
        poder:{
            type: Sequelize.STRING,
            required: true,
            
        }
    })
}

main()