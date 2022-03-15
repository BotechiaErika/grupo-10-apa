const fs = require('fs')
const path = require('path') heroku logs--tail
let controller = {
    landingProductos: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunaID: 1,
            comunaIncludes: "Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución",
            comunaParagphy: "La Comuna 1 está integrada por los 	barrios de  Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución.",
            comunaID2: 2,
            comunaIncludes2: "Recoleta",
            comunaParagphy2: "Esta Comuna está integrada por el barrio de Recoleta.",
            comunaID3: 3,
            comunaIncludes3: "Balvanera y San Cristóbal",
            comunaParagphy3: "Esta Comuna está integrada por los barrios de La Boca, Barracas, Parque Patricios y Nueva Pompeya.",
            comunaID4: 4,
            comunaIncludes4: "La Boca, Barracas, Parque Patricios y Nueva Pompeya.",
            comunaParagphy4: "Esta Comuna está integrada por los barrios de La Boca, Barracas, Parque Patricios y Nueva Pompeya.",
            comunaID5: 5,
            comunaIncludes5: "Almagro y Boedo",
            comunaParagphy5: "Entre ALMAGRO y BOEDO se queda el alcance de la Comuna 5",
            comunaID6: 6,
            comunaIncludes6: "CABALLITO",
            comunaParagphy6: "Entre los Barrios en Ascension se encuentra CABALLITO",
            comunaID7: 7,
            comunaIncludes7: "Flores y Parque Chacabuco",
            comunaParagphy7: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID8: 8,
            comunaIncludes8: "Villa Soldati, Villa Riachuelo, Villa Lugano",
            comunaParagphy8: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID9: 9,
            comunaIncludes9: "Liniers, Mataderos y Parque Avellaneda",
            comunaParagphy9: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID10: 10,
            comunaIncludes10: "Villa Real, Monte Castro, Versalles, Floresta, Vélez Sarsfield y Villa Luro",
            comunaParagphy10: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID11: 11,
            comunaIncludes11: "Villa General Mitre, Villa Devoto, Villa del Parque y Villa Santa Rita",
            comunaParagphy11: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID12: 12,
            comunaIncludes12: "Coghlan, Saavedra, Villa Urquiza y Villa Pueyrredón.",
            comunaParagphy12: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID13: 13,
            comunaIncludes13: "Núñez, Belgrano y Colegiales",
            comunaParagphy13: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID14: 14,
            comunaIncludes14: "Palermo",
            comunaParagphy14: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
            comunaID15: 15,
            comunaIncludes15: " Chacarita, Villa Crespo, La Paternal, Villa Ortúzar, Agronomía y Parque Chas",
            comunaParagphy15: "Contenido en CONSTRUCCION para MEJOR ATENDER A SUS PEDIDOS",
        })
    },
    detalles: (req, res) => {
            res.render('products/localDetails', { title: 'detail' })
        }
        //comunasCABA: (req, res) => {
        //    const pageID = req.params.pageID
        //    res.render('products/productsXComuna', {
        //        title,
        //        comunaID,
        //        comunaIncludes,
        //        comunaParaghy,
        //        dobleID
        //    })
        //}
}

module.exports = controller