<<<<<<< HEAD
/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  // Import dependencies
  var path = require('path');

  // This bootstrap version indicates what version of fake data we're dealing with here.
  var HARD_CODED_DATA_VERSION = 0;

  // This path indicates where to store/look for the JSON file that tracks the "last run bootstrap info"
  // locally on this development computer (if we happen to be on a development computer).
  var bootstrapLastRunInfoPath = path.resolve(sails.config.appPath, '.tmp/bootstrap-version.json');

  // Whether or not to continue doing the stuff in this file (i.e. wiping and regenerating data)
  // depends on some factors:
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // If the hard-coded data version has been incremented, or we're being forced
  // (i.e. `--drop` or `--environment=test` was set), then run the meat of this
  // bootstrap script to wipe all existing data and rebuild hard-coded data.
  if (sails.config.models.migrate !== 'drop' && sails.config.environment !== 'test') {
    // If this is _actually_ a production environment (real or simulated), or we have
    // `migrate: safe` enabled, then prevent accidentally removing all data!
    if (process.env.NODE_ENV==='production' || sails.config.models.migrate === 'safe') {
      sails.log.warn('Since we are running with migrate: \'safe\' and/or NODE_ENV=production (in the "'+sails.config.environment+'" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...');
      return done();
    }//•

    // Compare bootstrap version from code base to the version that was last run
    var lastRunBootstrapInfo = await sails.helpers.fs.readJson(bootstrapLastRunInfoPath)
    .tolerate('doesNotExist');// (it's ok if the file doesn't exist yet-- just keep going.)

    if (lastRunBootstrapInfo && lastRunBootstrapInfo.lastRunVersion === HARD_CODED_DATA_VERSION) {
      sails.log('Skipping v'+HARD_CODED_DATA_VERSION+' bootstrap script...  (because it\'s already been run)');
      sails.log('(last run on this computer: @ '+(new Date(lastRunBootstrapInfo.lastRunAt))+')');
      return done();
    }//•

    sails.log('Running v'+HARD_CODED_DATA_VERSION+' bootstrap script...  ('+(lastRunBootstrapInfo ? 'before this, the last time the bootstrap ran on this computer was for v'+lastRunBootstrapInfo.lastRunVersion+' @ '+(new Date(lastRunBootstrapInfo.lastRunAt)) : 'looks like this is the first time the bootstrap has run on this computer')+')');
  }
  else {
    sails.log('Running bootstrap script because it was forced...  (either `--drop` or `--environment=test` was used)');
  }

  // Since the hard-coded data version has been incremented, and we're running in
  // a "throwaway data" environment, delete all records from all models.
  for (let identity in sails.models) {
    await sails.models[identity].destroy({});
  }//∞


  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  // By convention, this is a good place to set up fake data during development.
          //DROP ALL DATABASES EN MODE BAGARRE
         // await Utilisateurs.drop(function(err) { /** **/ });
         // await Langues.drop(function(err) { /** **/ });
         //await Categories.drop(function(err) { /** **/ });
         // await Mots.drop(function(err) { /** **/ });
          //await Cartes.drop(function(err) { /** **/ });

          // Send it to the database.
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Utilisateurs AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Langues AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Categories AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Mots AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Cartes AUTO_INCREMENT = 1');

          await Utilisateurs.createEach([
            { email: 'Dwenn@live.fr',   nom: 'Dwenn',   prenom: 'Kaufmann',   motDePasse: await sails.helpers.passwords.hashPassword('Dwenn') , id : 1},
            { email: 'Mehmet@live.fr',  nom: 'Mehmet',  prenom: 'Ongan',      motDePasse: await sails.helpers.passwords.hashPassword('Mehmet') },
            { email: 'Maxence@live.fr', nom: 'Maxence', prenom: 'Bender',     motDePasse: await sails.helpers.passwords.hashPassword('Maxence') },
            { email: 'Dilane@live.fr',  nom: 'Dilane',  prenom: 'Rodriguez',  motDePasse: await sails.helpers.passwords.hashPassword('Dilane') },
            { email: 'Remy@live.fr',    nom: 'Remy',    prenom: 'Perreira',   motDePasse: await sails.helpers.passwords.hashPassword('Remy') },
          ]);

          await Langues.createEach([
            { libelle: 'French' },
            { libelle: 'English' },
            { libelle: 'Italian' },
          ]);

          await Categories.createEach([
            { libelle: 'Food' },
            { libelle: 'School' },
            { libelle: 'Computer' },
            { libelle: 'Pokémon' },
          ]);

          await Mots.createEach([
            //Crayon
            { libelle: 'Crayon',    numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Pencil',    numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Matita',    numLangues : 3, numUtilisateurs : 1},
            

            //Stylo
            { libelle: 'Stylo',    numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Pencil',   numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Penna',    numLangues : 3, numUtilisateurs : 1},
            
            //Régle
            { libelle: 'Règle',    numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Ruler',    numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Regola',   numLangues : 3, numUtilisateurs : 1},
            

            //Sac à dos
            { libelle: 'Sac à dos',  numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Backpack',   numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Zaino',      numLangues : 3, numUtilisateurs : 1},
            

            //Livre
            { libelle: 'Book',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Rubber',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Libro',   numLangues : 3, numUtilisateurs : 1},

            //Cahier
            { libelle: 'Cahier',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Notebook',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Taccuino',   numLangues : 3, numUtilisateurs : 1},

            //Professeur
            { libelle: 'Professeur',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Professor',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Professore',   numLangues : 3, numUtilisateurs : 1},

            //Classeur
            { libelle: 'Classeur',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Binder',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Quaderno ad anelli',   numLangues : 3, numUtilisateurs : 1},

            //Salle de classe
            { libelle: 'Salle de classe',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Classroom',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Aula',   numLangues : 3, numUtilisateurs : 1},

            //Étudiant
            { libelle: 'Étudiant',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Student',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Studente',   numLangues : 3, numUtilisateurs : 1},

            //École
            { libelle: 'Ecole',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'School',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Scuola',   numLangues : 3, numUtilisateurs : 1},

            //Compas
            { libelle: 'Compas',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Compass',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Bussola',   numLangues : 3, numUtilisateurs : 1},

            //Leçon
            { libelle: 'Leçon',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Lesson',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Lezione',   numLangues : 3, numUtilisateurs : 1},

            //Pupitre
            { libelle: 'Pupitre',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Desk',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Scrivania',   numLangues : 3, numUtilisateurs : 1},


          ]);

          await Cartes.createEach([
            //Cération des Cartes à la main pour l'utilisateur 1 (Dwenn@live.fr)
    		    { numMotsRecto: 1,  numMotsVerso: 2,	numUtilisateurs : 1, numCategories : 2},
			      { numMotsRecto: 1,  numMotsVerso: 3,  	numUtilisateurs : 1 ,numCategories : 2},

            { numMotsRecto: 4,  numMotsVerso: 5,	numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 4,  numMotsVerso: 6,	numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 7,  numMotsVerso: 8,	numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 7,  numMotsVerso: 9,	numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 10,  numMotsVerso: 11,	numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 10,  numMotsVerso: 12,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 13,  numMotsVerso: 14,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 13,  numMotsVerso: 15,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 16,  numMotsVerso: 17,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 16,  numMotsVerso: 18,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 19,  numMotsVerso: 20,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 19,  numMotsVerso: 21,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 22,  numMotsVerso: 24,  numUtilisateurs : 1,numCategories : 2},

            //Cartes compartiment 4
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
            
		  ]);
		  
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN

  // Save new bootstrap version
  await sails.helpers.fs.writeJson.with({
    destination: bootstrapLastRunInfoPath,
    json: {
      lastRunVersion: HARD_CODED_DATA_VERSION,
      lastRunAt: Date.now()
    },
    force: true
  })
  .tolerate((err)=>{
    sails.log.warn('For some reason, could not write bootstrap version .json file.  This could be a result of a problem with your configured paths, or, if you are in production, a limitation of your hosting provider related to `pwd`.  As a workaround, try updating app.js to explicitly pass in `appPath: __dirname` instead of relying on `chdir`.  Current sails.config.appPath: `'+sails.config.appPath+'`.  Full error details: '+err.stack+'\n\n(Proceeding anyway this time...)');
  });

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
=======
/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  // Import dependencies
  var path = require('path');

  // This bootstrap version indicates what version of fake data we're dealing with here.
  var HARD_CODED_DATA_VERSION = 0;

  // This path indicates where to store/look for the JSON file that tracks the "last run bootstrap info"
  // locally on this development computer (if we happen to be on a development computer).
  var bootstrapLastRunInfoPath = path.resolve(sails.config.appPath, '.tmp/bootstrap-version.json');

  // Whether or not to continue doing the stuff in this file (i.e. wiping and regenerating data)
  // depends on some factors:
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // If the hard-coded data version has been incremented, or we're being forced
  // (i.e. `--drop` or `--environment=test` was set), then run the meat of this
  // bootstrap script to wipe all existing data and rebuild hard-coded data.
  if (sails.config.models.migrate !== 'drop' && sails.config.environment !== 'test') {
    // If this is _actually_ a production environment (real or simulated), or we have
    // `migrate: safe` enabled, then prevent accidentally removing all data!
    if (process.env.NODE_ENV==='production' || sails.config.models.migrate === 'safe') {
      sails.log.warn('Since we are running with migrate: \'safe\' and/or NODE_ENV=production (in the "'+sails.config.environment+'" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...');
      return done();
    }//•

    // Compare bootstrap version from code base to the version that was last run
    var lastRunBootstrapInfo = await sails.helpers.fs.readJson(bootstrapLastRunInfoPath)
    .tolerate('doesNotExist');// (it's ok if the file doesn't exist yet-- just keep going.)

    if (lastRunBootstrapInfo && lastRunBootstrapInfo.lastRunVersion === HARD_CODED_DATA_VERSION) {
      sails.log('Skipping v'+HARD_CODED_DATA_VERSION+' bootstrap script...  (because it\'s already been run)');
      sails.log('(last run on this computer: @ '+(new Date(lastRunBootstrapInfo.lastRunAt))+')');
      return done();
    }//•

    sails.log('Running v'+HARD_CODED_DATA_VERSION+' bootstrap script...  ('+(lastRunBootstrapInfo ? 'before this, the last time the bootstrap ran on this computer was for v'+lastRunBootstrapInfo.lastRunVersion+' @ '+(new Date(lastRunBootstrapInfo.lastRunAt)) : 'looks like this is the first time the bootstrap has run on this computer')+')');
  }
  else {
    sails.log('Running bootstrap script because it was forced...  (either `--drop` or `--environment=test` was used)');
  }

  // Since the hard-coded data version has been incremented, and we're running in
  // a "throwaway data" environment, delete all records from all models.
  for (let identity in sails.models) {
    await sails.models[identity].destroy({});
  }//∞


  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  //CREATION DE DONNEES DE TEST A LA MAIN
  // By convention, this is a good place to set up fake data during development.
          //DROP ALL DATABASES EN MODE BAGARRE
         // await Utilisateurs.drop(function(err) { /** **/ });
         // await Langues.drop(function(err) { /** **/ });
         //await Categories.drop(function(err) { /** **/ });
         // await Mots.drop(function(err) { /** **/ });
          //await Cartes.drop(function(err) { /** **/ });

          // Send it to the database.
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Utilisateurs AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Langues AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Categories AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Mots AUTO_INCREMENT = 1');
          var rawResult = await sails.sendNativeQuery('ALTER TABLE Cartes AUTO_INCREMENT = 1');

          await Utilisateurs.createEach([
            { email: 'Dwenn@live.fr',   nom: 'Dwenn',   prenom: 'Kaufmann',   motDePasse: await sails.helpers.passwords.hashPassword('Dwenn') , id : 1},
            { email: 'Mehmet@live.fr',  nom: 'Mehmet',  prenom: 'Ongan',      motDePasse: await sails.helpers.passwords.hashPassword('Mehmet') },
            { email: 'Maxence@live.fr', nom: 'Maxence', prenom: 'Bender',     motDePasse: await sails.helpers.passwords.hashPassword('Maxence') },
            { email: 'Dilane@live.fr',  nom: 'Dilane',  prenom: 'Rodriguez',  motDePasse: await sails.helpers.passwords.hashPassword('Dilane') },
            { email: 'Remy@live.fr',    nom: 'Remy',    prenom: 'Perreira',   motDePasse: await sails.helpers.passwords.hashPassword('Remy') },
          ]);

          await Langues.createEach([
            { libelle: 'French' },
            { libelle: 'English' },
            { libelle: 'Italian' },
          ]);

          await Categories.createEach([
            { libelle: 'Food' ,numUtilisateurs : 1},
            { libelle: 'School' ,numUtilisateurs : 1},
            { libelle: 'Computer' ,numUtilisateurs : 1},
            { libelle: 'Pokémon' ,numUtilisateurs : 1},
          ]);

          await Mots.createEach([
            //Crayon
            { libelle: 'Crayon',    numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Pencil',    numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Matita',    numLangues : 3, numUtilisateurs : 1},
            

            //Stylo
            { libelle: 'Stylo',    numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Pencil',   numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Penna',    numLangues : 3, numUtilisateurs : 1},
            
            //Régle
            { libelle: 'Règle',    numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Ruler',    numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Regola',   numLangues : 3, numUtilisateurs : 1},
            

            //Sac à dos
            { libelle: 'Sac à dos',  numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Backpack',   numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Zaino',      numLangues : 3, numUtilisateurs : 1},
            

            //Livre
            { libelle: 'Book',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Rubber',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Libro',   numLangues : 3, numUtilisateurs : 1},

            //Cahier
            { libelle: 'Cahier',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Notebook',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Taccuino',   numLangues : 3, numUtilisateurs : 1},

            //Professeur
            { libelle: 'Professeur',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Professor',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Professore',   numLangues : 3, numUtilisateurs : 1},

            //Classeur
            { libelle: 'Classeur',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Binder',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Quaderno ad anelli',   numLangues : 3, numUtilisateurs : 1},

            //Salle de classe
            { libelle: 'Salle de classe',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Classroom',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Aula',   numLangues : 3, numUtilisateurs : 1},

            //Étudiant
            { libelle: 'Étudiant',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Student',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Studente',   numLangues : 3, numUtilisateurs : 1},

            //École
            { libelle: 'Ecole',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'School',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Scuola',   numLangues : 3, numUtilisateurs : 1},

            //Compas
            { libelle: 'Compas',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Compass',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Bussola',   numLangues : 3, numUtilisateurs : 1},

            //Leçon
            { libelle: 'Leçon',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Lesson',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Lezione',   numLangues : 3, numUtilisateurs : 1},

            //Pupitre
            { libelle: 'Pupitre',   numLangues : 1, numUtilisateurs : 1},
            { libelle: 'Desk',  numLangues : 2, numUtilisateurs : 1},
            { libelle: 'Scrivania',   numLangues : 3, numUtilisateurs : 1},


          ]);

          await Cartes.createEach([
            //Cération des Cartes à la main pour l'utilisateur 1 (Dwenn@live.fr)
    		    { numMotsRecto: 1,  numMotsVerso: 2,	numUtilisateurs : 1, numCategories : 2},
			      { numMotsRecto: 1,  numMotsVerso: 3,  	numUtilisateurs : 1 ,numCategories : 2},

            { numMotsRecto: 4,  numMotsVerso: 5,	numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 4,  numMotsVerso: 6,	numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 7,  numMotsVerso: 8,	numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 7,  numMotsVerso: 9,	numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 10,  numMotsVerso: 11,	numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 10,  numMotsVerso: 12,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 13,  numMotsVerso: 14,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 13,  numMotsVerso: 15,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 16,  numMotsVerso: 17,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 16,  numMotsVerso: 18,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 19,  numMotsVerso: 20,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 19,  numMotsVerso: 21,  numUtilisateurs : 1,numCategories : 2},

            { numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1,numCategories : 2},
            { numMotsRecto: 22,  numMotsVerso: 24,  numUtilisateurs : 1,numCategories : 2},

            //Cartes compartiment 4
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
			{ numMotsRecto: 22,  numMotsVerso: 23,  numUtilisateurs : 1, compartiment: 1,numCategories : 2},
            
		  ]);
		  
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN
    //FIN DE CREATION DE DONNEES DE TEST A LA MAIN

  // Save new bootstrap version
  await sails.helpers.fs.writeJson.with({
    destination: bootstrapLastRunInfoPath,
    json: {
      lastRunVersion: HARD_CODED_DATA_VERSION,
      lastRunAt: Date.now()
    },
    force: true
  })
  .tolerate((err)=>{
    sails.log.warn('For some reason, could not write bootstrap version .json file.  This could be a result of a problem with your configured paths, or, if you are in production, a limitation of your hosting provider related to `pwd`.  As a workaround, try updating app.js to explicitly pass in `appPath: __dirname` instead of relying on `chdir`.  Current sails.config.appPath: `'+sails.config.appPath+'`.  Full error details: '+err.stack+'\n\n(Proceeding anyway this time...)');
  });

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
>>>>>>> dev
