/**
 * MotsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Returns only the words that the user
    find: async function(req,res){
        var myMots = await Mots.find({numUtilisateurs : req.me.id});
        
        return res.json(myMots);
    }

};

