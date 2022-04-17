const IndexController= {
    viewIndex: (req, res)=>{
        let {id, name} = req.query
        return res.render("indexView.ejs", {idUser:id, nameUser:name})
    },
    confirmation: (req, res)=>{
        let {name, email} = req.query
        res.send(`Recebido com sucesso o nome: ${name} e email: ${email}`)
    }
}

module.exports = IndexController