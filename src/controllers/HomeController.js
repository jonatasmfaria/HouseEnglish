// Chamadas da home page
const HomeController = {
    homePage: (req, res) => {
        return res.render("home.ejs")
    }
}

module.exports = HomeController