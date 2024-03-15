import { Router } from "express";
import { crearTarea, listarTareas, obtenerTareaPorId, obtenerTareaPorNombre } from "../controllers/tareas.controllers.js";

const router = Router();

router.route('/tareas').get(listarTareas).post(crearTarea)
router.route('/tarea/:id').get(obtenerTareaPorId)
router.route('/tarea/nombre/:nombre').get(obtenerTareaPorNombre)

export default router;