const EstudantesController= {
    index: (req, res)=>{
        return res.render("estudantes.ejs")
    }
}

module.exports = EstudantesController