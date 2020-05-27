// 开启服务
const path = require("path");
const cors = require("cors");
// 加载已经下载好的express文件
const express = require("express");
const app = express();
app.listen(3007, () => console.log("大事件接口启动开始"));

// ‥‥‥‥‥‥‥‥‥‥配置应用级别的中间件(后续所有的路由文件都可以使用)‥‥‥‥‥‥‥‥‥‥
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));

// ‥‥‥‥‥‥‥‥‥‥加载路由模块,并且注册成中间件‥‥‥‥‥‥‥‥‥‥
// app.use("前缀", require("加载require"));
// app.use("/api", require("./routers/login.js"));
app.use("/api", require(path.join(__dirname, "routers", "login")));
app.use("/my/article", require(path.join(__dirname, "routers", "category")));
app.use("/my/article", require(path.join(__dirname, "routers", "article")));
app.use("/my", require(path.join(__dirname, "routers", "user")));