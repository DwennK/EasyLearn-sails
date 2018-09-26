module.exports = {


  friendlyName: 'View play',


  description: 'Display "Play" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/game/play'
    }

  },


  fn: async function (inputs, exits) {

    var things = [
      { id:0 , label: 'Ceci est le label '},
      { id:1 , label: 'Ceci est le label1'},
      { id:2 , label: 'Ceci est le label2'},
      { id:3 , label: 'Ceci est le label3'},
    ];

    var userxs = await Utilisateurs.find();

    // Respond with view.
    return exits.success(
      {
            //On y retourne le tableau de choses
            things: things,
            userxs: userxs
      }
    );

  },


};
