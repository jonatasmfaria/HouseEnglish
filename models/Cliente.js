const Endereco = require("./Endereco")

module.exports = (sequelize, DataType) => {
    const Cliente = sequelize.define('Cliente', {
        pk_id_cliente: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_endereco: {
            type: DataType.INTEGER,
            references: {
                model: Endereco,
                key: 'pk_id_endereco'
            }
        },
        nome: DataType.STRING,
        telefone: DataType.STRING,
        cpf: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING
    }, {
        tableName: 'cliente',
        timestamps: false
    })
    return Cliente
}