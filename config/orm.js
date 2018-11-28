const connection = require("../config/connection.js");
const orm = {
    create: function(name, value){
     return new Promise((reject,resolve)=>{
     connection.query("INSERT INTO burgers SET ?", {
         [name]:value,
         devour: false,

     },(error,response)=>{

        if (error) reject(error)
        resolve("burger data added")
      })
     })
    },
    read: function(value){
     return new Promise((reject,resolve)=>{
         connection.query(`SELECT ${value} FROM burgers`,(error,response)=>{
             if(error) reject(error)
             resolve(response)
         })
     })
    },
    update: function(table,columnname,idname,valueone,valuetwo){
   return new Promise((reject,resolve)=>{
     connection.query(`UPDATE ${table} SET ${columnname}=${valueone} WHERE ?`,{
         [idname]:valuetwo,
     },(error,response)=>{
         if(error) reject(error)
         resolve("refreshed")
        })
     })
    },
    delete: function(value,table){
     return new Promise((reject,resolve)=>{
         connection.query(`DELETE FROM ${table} WHERE burgerLibrary = ${value}`,(error,response)=>{
             if(error) reject(error)
             resolve("TERMINATED!")
         })
     })
    }
    
}

module.exports = orm