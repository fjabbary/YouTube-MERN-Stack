const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    PORT = 8080,
    cors = require('cors');

app.use(cors())

const videoList = require('./data/videoList.json')
const videoDetails = require('./data/videoDetails')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('app root')
})

app.get('/videos', (req, res) => {
    res.json(videoList)
})

app.get('/videos/:id', (req, res) => {
    const id = req.params.id;

    const foundVideo = videoDetails.find(video => video.id == id)
    res.json(foundVideo)
})

app.post('/video/add', (req, res) => {
    res.json('add video')
})

app.listen(PORT, () => {
    console.log(`App is running at ports ${PORT}`)
})
