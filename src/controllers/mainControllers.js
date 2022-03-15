let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: "APA" });
    },
    empresas: (req, res) => {
        res.render('empresas/loginEmpresa', { title: "Login EMPRESAS" });
    }

}
module.exports = controller