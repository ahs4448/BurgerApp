const orm = require("../config/orm")

const burger = {
    createBurger: function (val) {
        return new Promise((reject, resolve) => {
            orm.create("burgerLibrary", val).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })

        })
    },
    everyBurger: function () {
        return new Promise((reject, resolve) => {
            orm.read("*").then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    updateBurger: function (value, id) {
        return new Promise((reject, resolve) => {
            orm.update("burgers", "devoured", "ID", value, id).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}


module.exports = burger