import { defineRelationships } from "./relationships/relationships";
const { Sequelize } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,{ 
        dialect:'mysql',
        host:'localhost'
    })

    const modelDefiners  = [
        require('./models/room.model'),
        require('./models/chatMessage.model')
    ]
    
    //define tabels
    for (const modelDefiner of modelDefiners) {
        modelDefiner(sequelize);
    }
    
    // define relationships
    defineRelationships(sequelize)
    

module.exports = sequelize;