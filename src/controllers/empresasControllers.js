let controller = {
    iniciarSeccion: (req, res) => {
        res.render('empresas/loginEmpresa')
    },
    login: (req, res) => {
        req.params.login(empresa.id)
    },
    cadastroEmpresa: (req, res) => {
        res.render('empresas/cadastroEmpresa', {
            title: "Cadestre su EMPRESA"
        })
    }
}
module.exports = controller