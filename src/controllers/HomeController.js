// Chamadas da home page
const HomeController = {
    homePage: (req, res) => {
        return res.render("home.ejs", { usuario: req.session.usuario })
    }
}

module.exports = HomeController