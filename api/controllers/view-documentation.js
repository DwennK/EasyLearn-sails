module.exports = {


  friendlyName: 'View documentation',


  description: 'Display "Documentation" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/documentation'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
