import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTareas, obtenerTareaPorId, obtenerTareaPorNombre } from "../controllers/tareas.controllers.js";

const router = Router();

router.route('/tareas').get(listarTareas).post(crearTarea)
router.route('/tarea/:id').get(obtenerTareaPorId).put(editarTarea).delete(borrarTarea)
router.route('/tarea/nombre/:nombre').get(obtenerTareaPorNombre)

export default router;