import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
// app.use('/user/', UserRoutes)

app.post('/user', async (req, res) => {
    const { name, email, password } = req.body;
    res.send(name + ' ' + email + ' ' + password);
    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})