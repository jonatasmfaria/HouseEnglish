module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
        pk_id_endereco: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cep: DataType.STRING,
        rua: DataType.STRING,
        numero: DataType.INTEGER,
        complemento: DataType.STRING,
        bairro: DataType.STRING,
        cidade: DataType.STRING,
        estado: DataType.STRING
    }, {
        tableName: 'endereco',
        timestamps: false
    })
    return Endereco
}