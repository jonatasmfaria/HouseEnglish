const { Cliente, Endereco } = require('../../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt')

const ClienteController = {
    viewCliente: (req, res) => {
        return res.render("cliente.ejs")
    },
    cadastroCliente: async (req, res) => {
        let { nome, telefone, cpf, email, senha, cep, rua, numero, complemento, bairro, cidade, estado } = req.body;
        // console.log(nome, telefone, cpf, email, senha, cep, rua, numero, complemento, bairro, cidade, estado)
        let end = await Endereco.create({
            cep, rua, numero, complemento, bairro, cidade, estado
        })
        let senhaBcrypt = await bcrypt.hashSync(senha, 12)
        let cli = await Cliente.create({
            fk_endereco: end.pk_id_endereco,
            nome,
            telefone,
            cpf,
            email,
            senha: senhaBcrypt
        })
        return res.send(cli)
    }
}

module.exports = ClienteController