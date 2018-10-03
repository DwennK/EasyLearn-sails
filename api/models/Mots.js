/**
 * Mots.js
 *
 * Un mot contenant le numéro de la langue, et le libellé
 */

module.exports = {
    tableName:  'mots',
    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═

      libelle: {
        type: 'string',
        required: true,
        maxLength : 50,
      },
  

  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
      
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a
  
      numLangues: {
        model : 'langues',
        required: true,
      },

      numUtilisateurs: {
        model: 'utilisateurs',
        required: true,
      },

    },


    customToJSON: function() {
      // Return a shallow copy of this record with the password removed.
      return _.omit(this, ['numUtilisateurs'])
    },
    
  
  
  };
  