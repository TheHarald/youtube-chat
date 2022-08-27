import { Sequelize } from "sequelize";

export function defineRelationships(sequelize:Sequelize){
    const { chat_message, room } = sequelize.models
    room.hasMany(chat_message)
}

