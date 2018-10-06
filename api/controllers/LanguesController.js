/**
 * LanguesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    
    find: async function(req,res){
        var myLangues = await Langues.find();
        
        return res.json(myLangues);
    }



};

