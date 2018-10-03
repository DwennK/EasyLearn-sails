/**
 * MotsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Returns only the words that the user owns.
    find: async function(req,res){

        //On récupère toutes les cartes appartenant à l'utilisateur
        var myCartes = await Cartes.find({numUtilisateurs : req.me.id});

        //Si l'utilisateur a mis une limite de Cartes à récupérer, on affecte ce nombre.
        if(req.param('limit')){
            var nombreDeCartes = req.param('limit');
        }
        else{
            var nombreDeCartes = 20;
        }

        //Utilise lodash (_) pour les trier aléatoirement. Le deuxième paramètre est le nombre qu'on veut en prendre aléatoirement.
        var myCartesAleatoires = _.sample(myCartes,nombreDeCartes);

        //Renvoie le nombre de cartes demandé
        return res.json(myCartesAleatoires);
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

