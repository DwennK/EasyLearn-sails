/**
 * MotsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Cette fonction retourne le paquet de cartes que l'utilisateur doit révisier,
    // en commençant par les piocher dans le Compatiment 5.
    // Il mélage ces cartes du compartiment 5 de manière aléàtoires.
    // S'il n'y en pas 20 (par défaut) ou LIMIT (paramètre de la requetes),
    // L'opération se répète mais pour le compartiment numéro 4.
    // Ainsi de suite jusqu'à atteindre la limite de cartes demandées.
    find: async function(req,res){

        var nestedPop = require('nested-pop');
        //Si l'utilisateur a mis une limite de Cartes à récupérer, on affecte ce nombre.
        if(req.param('limit')){
            var nombreDeCartesVoulues = req.param('limit');
        }
        else{
            var nombreDeCartesVoulues = 20;
        }

        var myCartes = [];
        for(var i=5 ; myCartes.length  < nombreDeCartesVoulues && i >= 1 ; i--)
        {
            //On récupère toutes les cartes appartenant à l'utilisateur
            temp = await Cartes
            .find({numUtilisateurs : req.me.id, compartiment : i, numCategories : req.param('numCategories')})
            .populate('numMotsRecto')
            .populate('numMotsVerso')
            .populate('numCategories')
            .then(function(Langues){
                return nestedPop(Langues,{
                    numMotsRecto:{
                        as: 'Mots',
                        populate: [
                            'numLangues'
                        ]
                    }
                }
                )
            })
            .then(function(Langues){
                return nestedPop(Langues,{
                    numMotsVerso:{
                        as: 'Mots',
                        populate: [
                            'numLangues'
                        ]
                    }
                }
                )
            })


            //Utilise lodash (_) pour les trier aléatoirement. Le deuxième paramètre est le nombre qu'on veut en prendre aléatoirement.
            temp = _.sample(temp,(nombreDeCartesVoulues - myCartes.length));

            //On concatène pour n'en faire qu'un grand tableau, qui sera rempli la prochaine fois qu'on rentre dans la boucle si jamais il n'y a pas encore aasez de valeurs.
            myCartes = myCartes.concat(temp);
        }

        //Renvoie le nombre de cartes demandée, triées aléatoirement
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



    update: async function(req,res){

        //Si l'utilisateur ne modifie pas sa propre carte
        if(req.me.id != req.param('id'))
        {
            return res.unauthorized();
        }

        //Si c'est bien sa carte à lui, on la modifie.
        //Les paramètres sont optionnels , on peut ne changer que le compartiment si on veut :))
        var modifiedCartes = await Cartes
            .update({id: req.param('id')})
            .set({
                numMotsVerso : req.param('numMotsVerso'),
                numMotsVerso : req.param('numMotsVerso'),
                compartiment : req.param('compartiment'),
            })
            .fetch();

        return res.json(modifiedCartes);
    },

};

