
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
        await newUser.generateAuthToken(); // ==> Aqui model
        return res.status(201).json({messagen: "User create success fully!", user})
        
    } catch (error) {
        res.status(400).json({error:"eroooo"})
    }
}

async function loginUser (req, res){
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findByCredentials(email,password)
        if(!user){
            return res.status(401).json({error:"Erro ao realizar o login! Verifique as suas credenciais!"})
        }
        await user.generateAuthToken()
        res.status(201).json({message:"Usuário(a) logadi com sucessso!", user})

    } catch (error) {
        res.status(400).json({error:"usuario ou senha invalida"})
    }
}

async function returnUserProfile(req, res){
    await res.json(req.userData)
}

module.exports = {registerNewUser, loginUser, returnUserProfile}