/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    checkUser: function(req,res){
        if(!req.session.me){
            console.log("You are not logged in");
            return res.view('login');
        }else{
             console.log("You are logged in");
            return res.view('dashboard');
        }
    },
    getUser: function(req,res){
        console.log('Running getuser');
        User.findOne({id: req.session.me}, function(err,user){
            if(err){
                res.negotiate(err);
            }
            return res.send(user);
        })
    }
    
};

