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
        var createdUser = await Utilisateurs.create({nom: req.me.nom}, {prenom : req.me.prenom});

        return res.json(createdUser);
    }

};

