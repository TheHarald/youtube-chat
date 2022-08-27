import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize:Sequelize)=>{
    sequelize.define('chat_message',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        message:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })


}