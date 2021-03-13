var http=require("http");
var express=require("express");
var path = require("path")
var app=express();

var tem={
    message:"我是中间部分"
}
//创建服务器
http.createServer(app).listen(4000,function(){
    console.log("Server is listening port 4000");
});
//挂载静态资源处理中间件
console.log(__dirname,89)
app.use(express.static(__dirname+"/public"));
//设置模板视图的目录
// app.set("views","./public/views");
app.set('views', path.join(__dirname, '/public/views')); //注意path要require一下
//设置是否启用视图编译缓存，启用将加快服务器执行效率
app.set("view cache",true);
//设置模板引擎的格式即运用何种模板引擎
app.set("view engine","ejs");
//设置路由
app.get("/ejs",function(req,res){
    res.render("ejs1",{title:tem.message});
});