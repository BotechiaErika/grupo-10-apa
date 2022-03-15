let controller = {
    cadastroUsuarios: (req, res) => {
        res.render('users/cadastroUser', {
            title: "Crear Cuenta"
        });
    },
    myAccount: (req, res) => {
        res.render('users/accountUser', { title: "mi cuenta" })
    }
};
module.exports = controller