/**
 * MotsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Returns only the words that the user owns.
    find: async function(req,res){
        var myCartes = await Cartes.find({numUtilisateurs : req.me.id})
        .limit(req.param('limit'));
        return res.json(myCartes);
    },

    create: async function(req,res){
        
        var createdCard = await Cartes.create(
            {
                numMotsRecto: req.param('numMotsRecto'),
                numMotsVerso : req.param('numMotsVerso'),
                numUtilisateurs : req.me.id 
            })
            .fetch();

        return res.json(createdCard);
    },

};

