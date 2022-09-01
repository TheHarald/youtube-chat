import { roomRouter } from './routes/room';
import express, { Express, Request, Response } from 'express';
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const http = require('http');
const app:Express = express()
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors:{
    origin:"*",
    methods: ["GET", "POST"]
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin:"*"
}))

app.use('/api/room',roomRouter)



app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {
    console.log(`a user connected ${socket.id}`);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });


module.exports = server