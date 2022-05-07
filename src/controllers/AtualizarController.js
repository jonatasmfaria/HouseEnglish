const { Cliente, Endereco } = require('../../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt')

const AtualizarController = {
    buscar: async (req, res) => {
        let { id } = req.params
        let cli = await Cliente.findOne({ where: { pk_id_cliente: id } });
        let end = await Endereco.findOne({ where: { pk_id_endereco: cli.fk_endereco } });
        return res.render("buscarAtualizar.ejs", { myEnd: end, myCli: cli });
    },
    update: async (req, res) => {
        let { id_cliente, nome, telefone, cpf, email, senha, cep, rua, numero, complemento, bairro, cidade, estado } = req.body;
        let senhaBcrypt = await bcrypt.hashSync(senha, 12)
        let findCli = await Cliente.findOne({ where: { pk_id_cliente: parseInt(id_cliente) } });
        let cli = await Cliente.update(
            {
                nome: `${nome}`,
                telefone: `${telefone}`,
                cpf: `${cpf}`,
                email: `${email}`,
                senha: `${senhaBcrypt}`
            },
            {
                where: {
                    pk_id_cliente: parseInt(id_cliente)
                }
            });

        let end = await Endereco.update(
            {
                cep: `${cep}`,
                rua: `${rua}`,
                numero: `${numero}`,
                complemento: `${complemento}`,
                bairro: `${bairro}`,
                cidade: `${cidade}`,
                estado: `${estado}`
            },
            {
                where: {
                    pk_id_endereco: findCli.fk_endereco
                }
            });
        return res.send('Sucesso Atualizacao!')
    },
    delete: async (req, res) => {
        let { id } = req.params
        let findCli = await Cliente.findOne({ where: { pk_id_cliente: parseInt(id) } });
        await Cliente.destroy({
            where: {
                pk_id_cliente: parseInt(id)
            }
        });
        await Endereco.destroy({
            where: {
                pk_id_endereco: findCli.fk_endereco
            }
        });
    }
}

module.exports = AtualizarController