const { response, request } = require('express');

const usuariosGet =  (req = request, res = response) => {
    
    // parametros en crudo
    //const query = req.query;

    // desestructuracion de parametros
    const {q, nombre='no name', apikey} = req.query;

    res.json({
        msg: 'get API - controllador',
        q,
        nombre,
        apikey
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controllador',
        id
    })
}

const usuariosPost = (req, res= response) => {

    // body en crudo
    //const body = req.body;

    //desestructuracion del body
    const { nombre, apellido } = req.body;

    res.json({
        msg: 'post API - controllador',
        nombre,
        apellido,
    })
}

const usuariosDelete =  (req, res = response) => {
    res.json({
        msg: 'delete API - controllador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}