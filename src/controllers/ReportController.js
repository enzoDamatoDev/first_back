const { Op } = require('sequelize');
const User = require('../model/User');

module.exports = {
    async show(req, res){
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email:{
                    [Op.Like]: '%outlook.com'
                }
            },
            include: [
                {association: 'adresses' , where:{street: 'rua veronica'}},
                {association: 'techs',
                 required: false,
                 where:{
                     name: {
                         [Op.Like]: 'node'
                        }
                    }
                },
            ]
        })
        
        return res.json(users);
    }
};