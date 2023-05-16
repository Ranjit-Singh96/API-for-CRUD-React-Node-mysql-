const express=require('express');
const cors=require('cors');
const app=express.Router();

app.use(express.json());
app.use(cors());
const usersController=require('../controller/usersController');

app.post('/add-user',usersController.InsertData);
app.get('/all-users',usersController.FetchData);
app.delete('/delete-user/:id',usersController.DeleteUser);
app.put('/update-user/:id',usersController.UpdateData);

module.exports=app;