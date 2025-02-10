const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our website!");
})

app.post('/signup', async(req, res)=>{
    console.log(req.body)
    try {

        const {username,email,password,dateOfBirth} = req.body;

        if(!username){
            res.status(404).send({message : 'Username cannot be empty'});
        }
        if(!email){
            res.status(404).send({message : 'Email cannot be empty'});
        }
        if(password>=16 || password<8){
            res.status(404).send({message : 'Password should be greater than 8 or less than or equal to 16'});
        }

        res.status(200).send({message : 'Success'})


    } catch (error) {
        console.log(error);
    }
})

const port=1035;

app.listen(port,async()=>{
    try {

        console.log(`Server is running on http://localhost:${port}`);
        
    } catch (error) {
        console.log(error)
    }
    
})