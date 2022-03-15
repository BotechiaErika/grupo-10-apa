let controller = {
    cadastroUsuarios: (req, res) => {
        res.render('users/cadastroUser', {
            title: "Crear Cuenta"
        });
    },
    myAccount: (req, res) => {
        res.render('users/accountUser', { title: "mi cuenta" })
    },
    createUser: (req, res) => {

    },
    editUser: (req, res) => {

    },
    deleteUser: (req, res) => {

    },
    listUsers: (req, res) => {

    }
}
module.exports = controller