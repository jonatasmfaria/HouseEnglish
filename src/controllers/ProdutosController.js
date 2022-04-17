const ProdutosController= {
    viewForm: (req, res)=>{
        return res.render("produtos.ejs")
    },
    salvarForm: (req, res)=>{
        //console.log(req.body)
        let {nomeProduto, precoProduto} = req.body
        //res.send(`O corpo da mensagem foi Nome Produto: ${nomeProduto} de preco: ${precoProduto}`)
        res.redirect('/produtos/sucesso')
    },
    sucesso: (req, res)=>{
        return res.render("sucesso.ejs")
    },
        viewAttForm: (req , res)=>{
        let {id} = req.params
        let prod = [
            {id: 1, nome: "produto X", preco: 10},
            {id: 2, nome: "produto Y", preco: 12}
        ]
        //res.send(`Eu quero editar o produto ${id}`)
        res.render('editarProduto.ejs', {produtosAB:prod[id]})
    },
    editar: (req, res)=> {
        let {nomeProduto, precoProduto} = req.body
        res.send(`Voce editou o produto ${nomeProduto} de preco: ${precoProduto}`)
    },
    listarProdutos: (req, res)=>{
        let prod = [
            {id: 1, nome: "produto X", preco: 10},
            {id: 2, nome: "produto Y", preco: 12}
        ]
        res.render('listaProdutos', {listarProdutosAA:prod})
    },
    deletarProduto: (req, res)=>{
  let {id} = req.params
  res.send(`Estou deletando o produto ${id}`)
    }
}

module.exports = ProdutosController