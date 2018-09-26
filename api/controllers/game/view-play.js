module.exports = {


  friendlyName: 'View play',


  description: 'Display "Play" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/game/play'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
