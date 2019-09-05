//mysqlConfig.js
var mysql = require('mysql');
var config = require('./defaultConfig');

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
});

let allServices = {
  query: function (sql, values) {

    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {

            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })

  },
  findUserData: function (name) {
    let _sql = `select * from admin where acount = ${username} and password=${password}`
    return allServices.query(_sql).then(res => {
      if (res.length == 1 && res[0].elm_userPhone === phone && elm_userPassword === password) {
        return {
          msg: "登陆成功",
          code: 200
        }
      } else {
        return {
          msg: "登录失败",
          code: 201
        }
      }
    })
  }
}

module.exports = allServices;