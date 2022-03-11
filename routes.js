/////////CRUD IS DONE HERE!///////
const express = require("express");
const router  = express.Router();
const { add } = require("nodemon/lib/rules");
const pool = require("./db");
const db_connection = require("./db");

//Access all employees
router.get("/",async(req,res)=>{
    try{
        const all_rows = await pool.query("SELECT * FROM Employee");
        res.json(all_rows.rows);
    }
    catch(err){res.send(err.message);}

});

//get employee detail by id
router.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params.id;
        const all_rows = await pool.query("SELECT * FROM Employee WHERE id = $1",[id]);
        res.json(all_rows.rows);
    }
    catch(err){res.send(err.message);}

});

//CREATE EMPLOYEE
router.post("/create",async(req,res)=>{
    // const requ = req.body;
    const {name} = req.body;
    const {salary} = req.body;
    const {department} = req.body;
    const {job} = req.body;
    const {hire_date} = req.body;
    try{
            if (String(name.length) < 3){
            throw new Error("INVALID NAME!");
        }
        else if(parseInt(salary) < 0){
            throw new Error("INVALID SALARY!");
        }

        const addEmployee = await pool.query("INSERT INTO Employee(name,job,department,salary,hire_date) VALUES ($1,$2,$3,$4,$5) RETURNING *;",[name,job,department,salary,hire_date]);
        res.json(addEmployee.rows[0]);
    }
    catch(err){
        res.send(err.message);
    }
});

//DELETE BY ID
router.get("/delete/:id",async(req,res)=>{
    try{
        const {id} = req.params.id;
        const all_rows = await pool.query("DELETE FROM Employee WHERE id = $1",[id]);
        res.send("Deleted!");
    }
    catch(err){res.send(err.message);}

});
//UPDATE BY ID
router.put("/update/:id",async(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const {salary} = req.body;
    const {department} = req.body;
    const {job} = req.body;
    const {hire_date} = req.body;
    try{
        if (name.length < 3){
            throw new Error("INVALID NAME!");
        }
        else if(parseInt(salary) < 0){
            throw new Error("INVALID SALARY!");
        }

        const addEmployee = await pool.query("UPDATE Employee SET name = $1,job = $2,department = $3,salary = $4,hire_date = $5 WHERE id = $6 RETURNING *;",[name,job,department,salary,hire_date,id]);
        res.json(addEmployee.rows[0]);
    }
    catch(err){
        res.send(err.message);
    }
});

module.exports = router;