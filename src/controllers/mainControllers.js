let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: "APA" })
    },
    landingUser: (req, res) => {
        res.render('users/landingUser', { title: "HOME" })
    },
    iniciarSeccion: (req, res) => {
        res.render('empresas/loginEmpresa', { title: "login EMPRESAS" })
    },
    ingresarCuenta: (req, res) => {
        res.render('users/loginUser', { title: "login USUARIOO" })
    }
};
module.exports = controller