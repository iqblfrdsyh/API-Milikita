import { getTeam, getTeamById, saveTeam, updateTeam, deleteTeam } from "../controllers/teamsController.js";
import express from 'express'

const router = express.Router()

router.get('/teams', getTeam)
router.get('/teams/:id', getTeamById)
router.post('/teams', saveTeam)
router.patch('/teams/:id', updateTeam)
router.delete('/teams/:id', deleteTeam)

export default router