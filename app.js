import express from 'express';
import {MongoClient} from "mongodb"
import expressEjsLayouts from 'express-ejs-layouts';
const app = express();

app.set('view engine', 'ejs')
  

const connection_Url = "mongodb+srv://thoyyibusman:motherwash123@mother-wash.sjl0mki.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(connection_Url,(err)=>{
    if(err) throw err
    console.log("success")
})


app.use(express.static('public'))
app.use(expressEjsLayouts)


app.set('layout','./layout/userLayout.ejs')


app.get('/',(req,res) => {
    res.render('index',{title:"Mother Wash"});
})

app.get('/admin',(req,res)=>{
    res.render('admin/admin', {title: "admin" ,layout:'./layout/adminLayout.ejs'})
})
  
const PORT = 5000;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})