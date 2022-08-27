import { roomRouter } from './routes/room';
import express, { Express, Request, Response } from 'express';
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const http = require('http');
const app:Express = express()
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


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
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });


module.exports = app