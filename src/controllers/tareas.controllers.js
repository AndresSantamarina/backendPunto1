import Tarea from "../database/model/tarea.js"

export const listarTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas)
    } catch (error) {
        res.status(404).json({
            mensaje: "No se encontraron tareas"
        })
    }
}

export const obtenerTareaPorId = async (req, res) => {
    try {
        const tareaBuscadaPorId = await Tarea.findById(req.params.id);
        res.status(200).json(tareaBuscadaPorId)
    } catch (error) {
        res.status(404).json({
            mensaje: "No se encontró la tarea"
        })
    }
}

export const obtenerTareaPorNombre = async (req, res) => {
    try {
        const tareaBuscadaPorNombre = await Tarea.find({ nombreTarea: req.params.nombre }).exec();
        console.log(req.params.nombre)
        res.status(200).json(tareaBuscadaPorNombre)
    } catch (error) {
        res.status(404).json({
            mensaje: "No se encontró la tarea"
        })
    }
}


export const crearTarea = async (req, res) => {
    try {
        const tareaNueva = new Tarea(req.body)
        await tareaNueva.save();
        res.status(201).json({
            mensaje: "La tarea fue creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "No se pudo procesar la solicitud de crear tarea"
        })
    }
}

export const editarTarea = async (req, res) => {
    try {
        const buscarTarea = await Tarea.findById(req.params.id)
        if(!buscarTarea){
            return res.status(404).json({
                mensaje: "No se puedo editar la tarea, el id es incorrecto"
            })
        }
        await Tarea.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "La tarea fue modificada exitosamente"
        })
    } catch (error) {
        res.status(500).json({mensaje: "Ocurrió un error al intentar editar la tarea"})
    }
}

export const borrarTarea = async (req, res) => {
    try {
        const buscarTarea = await Tarea.findById(req.params.id)
        if(!buscarTarea){
            return res.status(404).json({
                mensaje: "No se puedo editar la tarea, el id es incorrecto"
            })
        }
        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "La tarea fue eliminada exitosamente"
        })
    } catch (error) {
        res.status(500).json({mensaje: "Ocurrió un error al intentar eliminar la tarea"})
    }
}