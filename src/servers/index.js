const express =require("express")
const mongoose =require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./Employee')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email })
      .then(user => {
          if (user) {
              if (user.password === password) {
                  res.json({ success: true, email: user.email });  
              } else {
                  res.json({ success: false, message: "The password is incorrect" });
              }
          } else {
              res.json({ success: false, message: "No record existed" });
          }
      })
      .catch(err => res.status(500).json({ success: false, message: "Server error" }));
});


app.post('/register',(req,res)=>{
  EmployeeModel.create(req.body)
  .then(employees => res.json(employees))
  .catch(err=> res.json(err))
})


app.get('/home', (req, res) => {
    EmployeeModel.find()
      .then(employees => {
        // console.log('Fetched employees from DB:', employees); 
        res.json(employees);
      })
      .catch(err => {
        console.error('Error fetching employees:', err);
        res.status(500).send('Server error');
      });
  });

app.listen(3001,()=>{
    console.log("server is running")
})


