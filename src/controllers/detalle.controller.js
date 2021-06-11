import { pool } from '../database'
const helpers = require('../libs/helpers');




//TRAER TODOS
export const readAlldetalle = async(req, res) => {
    try {
        const response = await pool.query('select *from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}



//TRAER UNO POR ID
export const readDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT ve.idventa, ve.numerodoc, det.precio,det.cantidad FROM venta ve, detalle det WHERE ve.idventa =$1 AND det.idventa=$1', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


//ELIMINAR
export const deleteDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where iddetalle=$1', [id]);
        return res.status(200).json(
            `Usuario ${ id } Se ha eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


//MODIFICAR
export const updateDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { idproducto, idventa, precio, cantidad } = req.body;
        await pool.query('update detalle set idproducto=$1, idventa=$2, precio=$3, cantidad=$4 where iddetalle=$5', [idproducto, idventa, precio, cantidad, id]);
        return res.status(200).json(
            `Detalle Modificado...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}




//CREAR
export const createDetalle = async(req, res) => {
    try {
        const { idproducto, idventa, precio, cantidad } = req.body;
        await pool.query('insert into detalle (idproducto, idventa, precio, cantidad) values($1,$2,$3,$4)', [idproducto, idventa, precio, cantidad]);
        return res.status(200).json(
            `Detalle Registrado...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}