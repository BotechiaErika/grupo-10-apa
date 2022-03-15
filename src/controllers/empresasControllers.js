let controller = {
    cadastroEmpresa: (req, res) => {
        res.render('empresas/cadastroEmpresa', {
            title: "Cadestre su EMPRESA"
        })
    }
}
module.exports = controller