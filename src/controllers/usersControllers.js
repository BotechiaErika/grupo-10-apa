let controller = {
    cadastroUsuarios: (req, res) => {
        res.render('users/cadastroUser', {
            title: "Crear Cuenta"
        });
    }
};
module.exports = controller