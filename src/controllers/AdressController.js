const Adress = require('../model/Adress');
const User = require('../model/User')

module.exports = {
    async find (req, res){
        const {user_id} = req.params;
        const user = await User.findByPk(user_id,{
            include: {association: 'adresses'}
        });
        

        return res.json(user);
    },
    async index (req, res){
        const adress = await Adress.findAll();

        return res.json(adress);
    },
    async store(req,res){
        const {user_id} = req.params;
        const{zip,street,number}= req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error:'user not found'});
        }

        const adress = await Adress.create({zip,street,number,user_id});

        return res.json(adress);
    }
}