const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blogdb', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
})

const Article = mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
}))
const app = express()
app.use(express.json())
app.use(require('cors')())

app.get('/', async (req, res) => {
    res.send('/////')
})
app.post('/api/articles',async(req,res)=>{
    const article = await Article.create(req.body)
    res.send({
        status:0,
        data:article
    })
})
app.get('/api/articles',async(req,res)=>{
    const data = await Article.find()
    res.send({
        status:0,
        data:data
    })
})
app.delete('/api/articles/:id',async(req,res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:0
    })
})
app.get('/api/articles/:id',async(req,res)=>{
    const article = await Article.findById(req.params.id)
    res.send({
        status:0,
        data:article
    })
})
app.put('/api/articles/:id',async(req,res)=>{
    const article =  await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send({
        status:0,
        data:article
    })
})
app.listen(3000, () => {
    console.log('running...')
})