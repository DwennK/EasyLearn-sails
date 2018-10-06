/**
 * Utilisateurs.js
 *
 * A user who can log in to this application.
 */

module.exports = {
    tableName:  'cartes',
    attributes: {

		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

		compartiment: {
		type: 'number',
		min: 1,
		max: 5,
		defaultsTo: 3,
		},

		nbFois: {
		type: 'number',
		defaultsTo: 0,
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
		// n/a
		

		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		// n/a
		numUtilisateurs: {
			model: 'utilisateurs',
			required: true,
		},

		numCategories: {
			model: 'categories',
			required: true,
		},

		numMotsRecto: {
			model : 'mots',
			required: true,
		},

		numMotsVerso: {
			model : 'mots',
			required: true,
		},

  
	},
	
	customToJSON: function() {
		// Return a shallow copy of this record with the password removed.
		return _.omit(this, ['numUtilisateurs'])
	},
  
  
  };
  