//SERVER SETTING AND ROUTING IS DONE HERE!!!
const Employee = require("./routes");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/Employee",Employee);


//HOMEPAGE
app.get("/",(req,res)=>{
    res.send("USE /Employee to get in api"+
            "\nUse /Employee/id  to get to specific employee(GET METHOD)"+
            "\nUse /Employee/create to create new employee(POST METHOD)"
            +"\nUse /Employee/delete/id to delete specific employee record(GET METHOD)"+
            "\nUse /Employee/update/id to update specific recorde (PUT METHOD)");
});
//SERVER 
app.listen(5002,()=>{
    console.log("Server is running at http://localhost:5002");
});