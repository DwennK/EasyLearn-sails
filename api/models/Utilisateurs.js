/**
 * Utilisateurs.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  tableName:  'utilisateurs',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    nom: {
      type: 'string',
      required: true,
      maxLength: 50,
    },

    prenom: {
      type: 'string',
      required: true,
      maxLength: 50,
    },

    email: {
      type: 'string',
      required: true,
      maxLength: 50,
      isEmail: true,
    },

    motDePasse: {
      type: 'string',
      maxLength: 200,
      required: true,
      protected: true,
    },

    customToJSON: function() {
      // Return a shallow copy of this record with the password and ssn removed.
      return _.omit(this, ['motDePasse'])
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

  },


};
