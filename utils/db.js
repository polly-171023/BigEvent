module.exports = (sql, params = null) => {
    //加载MySQL
    const mosql = require("mysql");
    const conn = mysql.createConnection({
        // 主机地址
        host: "localhost",
        // 端口号
        user: "root",
        password: "root",
        datebase: "BigEvent" //数据库待会儿再去创建
    });
    conn.connect();
    return new Promise((resolve, reject) => {
        conn.query(sql, params, (err, result) => {
            err ? reject(err) : resolve(result);
        });
        conn.end();
    }).catch(err => {
        console.log(err.message);
    })
};