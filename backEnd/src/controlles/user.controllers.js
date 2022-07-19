
const User = require('../model/user.model')


async function registerNewUser (req, res){
    try {
        let isUser = await User.find({email:req.body.email})
        console.log(isUser)
        if(isUser.length >= 1){
            return res.status(409).json({message:'Sorry! This email is already resgistered'})

        }

        const newUser = new User(req.body);
        const user = await newUser.save();
        const token = await newUser.generateAuthToken(); // ==> Aqui model
        return res.status(201).json({messagen: "User create success fully!", user})
        
    } catch (error) {
        res.status(400).json({error:"eroooo"})
    }
}

module.exports = {registerNewUser}