/**
 * UtilisateursController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Return only the user that make this request.
    find: async function(req,res){
        var myUtilisateurs = await Utilisateurs.find(req.me.id);
        
        return res.json(myUtilisateurs);
    },

    create: async function(req,res){
        
        var createdUser = await Cartes.create(
            {
                nom: req.param('nom'),
                prenom : req.param('prenom'),
                email : req.param('email'),
                motDePasse : req.param('motDePasse'),
            })
            .fetch();

        return res.json(createdUser);
    },



};

