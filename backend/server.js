const express=require('express');
const app=express();
const path=require('path');
const mysql=require('mysql');
const session=require('express-session');
const MySQLStore=require('express-mysql-session')(session);
const Router=require('./Router');

app.use(express.json());
app.listen(4000,()=>console.log("server is running on port 4000"));

