// Chamadas da login page
const LoginController = {
    loginPage: (req, res) => {
        return res.render("login.ejs")
    }
}

module.exports = LoginController