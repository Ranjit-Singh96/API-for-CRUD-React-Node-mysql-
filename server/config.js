const mysql=require('mysql');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ranjit123",
    database:"react_nodejs"
});
con.connect((err)=>{
    if(err){
        console.log("Mysql not connected..")
    }
    else{
        console.log("Mysql connected..")
    }
});

module.exports=con;