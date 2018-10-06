module.exports = {


  friendlyName: 'View play',


  description: 'Display "Play" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/game/play'
    }

  },


  fn: async function (inputs, exits) {

	//XXXXXXXXXXXXX
				var nombreDeCartesVoulues = 20;
				var nestedPop = require('nested-pop');

				var myCartes = [];
				for(var i=5 ; myCartes.length  < nombreDeCartesVoulues && i >= 1 ; i--)
				{
					//On récupère toutes les cartes appartenant à l'utilisateur
					temp = await Cartes
					.find({numUtilisateurs : this.req.me.id, compartiment : i})
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
					.then(function(Languesx){
						return nestedPop(Languesx,{
							numMotsVerso:{
								as: 'Mots',
								populate: [
									'numLangues'
								]
							}
						}
						)
					})
					.catch(function(err) {
						return err;
					});


					//Utilise lodash (_) pour les trier aléatoirement. Le deuxième paramètre est le nombre qu'on veut en prendre aléatoirement.
					temp = _.sample(temp,(nombreDeCartesVoulues - myCartes.length));

					//On concatène pour n'en faire qu'un grand tableau, qui sera rempli la prochaine fois qu'on rentre dans la boucle si jamais il n'y a pas encore aasez de valeurs.
					myCartes = myCartes.concat(temp);
				}

				//Renvoie le nombre de cartes demandée, triées aléatoirement
				//return res.json(myCartes);

    // Respond with view.
    return exits.success(
      {
            //On y retourne les tableaux
						myCartes
      }
    );

  },


};
