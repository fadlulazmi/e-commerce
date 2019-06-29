const User = require('../models/user')
const Helper = require('../helpers/helper')

class UserController {
    static login(req, res){
        if(req.body.email !== '' && req.body.password !== ''){
            // console.log(req.body)
            User.findOne({
                email : req.body.email
            })
                .then(user => {
                    if(!user){
                        res.status(404).json({ message : 'username / password wrong'})
                    }
                    else {
                        if(Helper.comparePassword(req.body.password, user.password)){
                            // console.log(user)
                            let token = Helper.generateJWT({
                                id : user._id,
                                username : user.username,
                                email : user.email
                            })
                            res.status(200).json({ access_token : token, user : {
                                _id : user._id,
                                username : user.username,
                                email : user.email
                            }})
                        } else {
                            res.status(404).json({ message : 'username / password wrong'})
                        }
                    }
                })
                .catch(err => {
                    // console.log(err)
                    res.status(500).json(err)
                })
        } else {
            res.status(400).json({ message : 'cannot set property of undefined'})
        }
    }

    static register(req, res){
        if(req.body.email !== '' && req.body.password !== '' && req.body.username !== '' && req.body.role !== ''){
            let {username, email, password, role} = req.body
            User.create({
                username,
                email,
                password,
                role
            })
                .then(user => {
                    res.status(201).json(user)
                })
                .catch(err => {
                    if (err.errors.email) {
                        res.status(400).json({ message : err.errors.email.reason });
                    } else if(err.errors.password) {
                        res.status(400).json({ message : err.errors.password.message });
                    } else if(err.errors.username) {
                        res.status(400).json({ message : err.errors.username });
                    }
                    else {
                        res.status(500).json(err);
                    }
                })
        } else{
            res.status(400).json({ message : 'cannot set property of undefined'})
        }
    }

    static delete(req, res){
        User.findByIdAndDelete(req.params.id)
            .then(deleted => {
                res.status(200).json(deleted)
            })
            .catch(err => {
                res.status(500).json(err)
            })
            
    }
}

module.exports = UserController