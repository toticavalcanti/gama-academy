const ICrud = require('./../interfaces/interfaceCrud')
const Sequelize = require('sequelize')


class Postgres extends ICrud {
    constructor(connection, schema){
        super()
        this._connection = connection
        this._schema = schema
    }

    async isConnected(){
        try {
            await this._connection.authenticate()
            return true;
        } catch (error) {
            console.error('Fail!')
            return false;
        }
    }
    
    static async defineModel(connection, schema) {
        const model = connection.define(
          schema.name, schema.schema, schema.options
        )
        await model.sync()
        return model
      }
    
    async create(item){
        const {
            dataValues
        } = await this._schema.create(item)
        return dataValues;
    }

    async update(id, item, upsert = false){
        const fn = upsert ? 'upsert' : 'update'
        return this._schema[fn](item, {
            where: {id: id}
        })
    }

    async read(item = {}){
        return this._schema.findAll({where: item, raw: true})
    }

    async delete(id){
        const query = id ? { id } : {}
        return this._schema.destroy({where: query})
    }

    static async connect(){
        const connection= new Sequelize(
            'heroes',
            'toticavalcanti',
            'minhasenhasecreta',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                //operatorsAliases: false, is deprected
                logging: false,
            }
        )
        return connection;
    }
}

module.exports = Postgres