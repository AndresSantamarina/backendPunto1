import { Router } from "express";
import { crearTarea, listarTareas, obtenerTareaPorId } from "../controllers/tareas.controllers.js";

const router = Router();

router.route('/tareas').get(listarTareas).post(crearTarea)
router.route('/tarea/:id').get(obtenerTareaPorId)

export default router;