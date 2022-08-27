import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize:Sequelize)=>{
    sequelize.define('room',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })

}