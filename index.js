import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import teamRoute from './routes/teamRoute.js'

const app = express()
const port = 3500

app.use(express.json())
app.use(teamRoute)
app.use(cors())

const main = async () => {
    await mongoose.connect('mongodb+srv://iqblfrdsyh:punyaiqbal@cluster0.t6cc0tu.mongodb.net/MilikKita?retryWrites=true&w=majority').finally(console.log(`Connected`))
}

main().catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})