const bcrypt = require('bcrypt');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const {v4: uuid4} = require('uuid');


const users = JSON.parse(fs.readFileSync('dev-data/users.json','utf-8'));

exports.postUserRegister = async (req,res)=>{
    try{
        console.log(req.body);
        const {username,email,password} = req.body;
        
        const hashedPassword = await bcrypt.hash(password,10);
        const userid = uuid4();
        const user = {userid,username,email,hashedPassword};
        
        users.push(user);
        fs.writeFile('dev-data/users.json',JSON.stringify(users),(err)=>{
            res.status(201).json(
                {
                    message:'user registered successfully',
                    user
    
                }
            )
        })
       


    }
    catch(err){
        res.status(404).send(err.message);
    }
   

}


exports.postLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const foundUser = users.find((user) => user.username === username);
       
        if (!foundUser) {
            return res.status(201).json({
                message: "Authentication Failed"
            });
        }

        const passwordMatch = await bcrypt.compare(password, foundUser.hashedPassword);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Authentication Failed"
            });
        }

        const JWT_SECRET = "hello";
        const token = jwt.sign(foundUser.userid,JWT_SECRET);

        res.status(200).json({
            token,
            userid: foundUser.userid
        });
    } catch (err) {
        res.status(500).json({
            message: "Authentication Failed"
        });
    }
}
