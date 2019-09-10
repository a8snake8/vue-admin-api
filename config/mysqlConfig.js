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
  findUserData: function (act) {
    let _sql = `SELECT * FROM admin where acount="${act}";;`
    return allServices.query(_sql)
  }
}

module.exports = allServices;