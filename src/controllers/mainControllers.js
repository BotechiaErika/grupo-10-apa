let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: "APA" });
    },
    landingUser: (req, res) => {
        res.render('users/landingUser', { title: "HOME" });
    },
    empresas: (req, res) => {
        res.render('empresas/loginEmpresa', { title: "Login EMPRESAS" });
    }
}

module.exports = controller