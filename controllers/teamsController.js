import Team from "../models/teamsModel.js";


// Get data
export const getTeam = async (req, res) => {
    try {
        const teams = await Team.find()
        res.json(teams)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get By Id
export const getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id)
        res.json(team)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const saveTeam = async (req, res) => {
    const team = new Team(req.body)
    try {
        const insertTeam = await team.save()
        res.status(201).json(insertTeam)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateTeam = async (req, res) => {
    try {
        const updateTeam = await Team.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(201).json(updateTeam)
        res.json(Team)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const deleteTeam = async (req, res) => {
    try {
        const deleteTeam = await Team.deleteOne({ _id: req.params.id })
        res.status(201).json(deleteTeam)
        res.json(Team)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}