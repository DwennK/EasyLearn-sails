module.exports = {


  friendlyName: 'Update password',


  description: 'Update the password for the logged-in user.',


  inputs: {

    motDePasse: {
      description: 'The new, unencrypted password.',
      example: 'abc123v2',
      required: true
    }

  },


  fn: async function (inputs, exits) {

    // Hash the new password.
    var hashed = await sails.helpers.passwords.hashPassword(inputs.motDePasse);

    // Update the record for the logged-in user.
    await Utilisateurs.update({ id: this.req.me.id })
    .set({
      motDePasse: hashed
    });

    return exits.success();

  }


};
