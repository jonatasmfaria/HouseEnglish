module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
        pk_id_produto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        nome_imagem: DataType.STRING,
        valor: DataType.DECIMAL
    }, {
        tableName: 'produto',
        timestamps: false
    })
    return Produto
}