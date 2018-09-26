/**
 * LanguesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    
    index(req, res, next) {
        Categories.find().exec(function(err, list) {
            if (err) return Error('Error');
            return res.view({
                result: list
            });
        });
    },

   async show(req, res, next) {
        var categorie = await Categories.find();
        return res.json(categorie);
       
    },

    edit(req, res, next) {
        Categories.findOne(req.param('id'), function Founded(err, value) {
            if (err) {
                return next(err);
            }
            res.view({
                element: value
            });
        });
    },    

    delete(req, res, next) {
        Categories.destroy(req.param('id'), function Update(err, value) {
            if (err) {
                return next(err);
            }
            return res.redirect('/categories');
        });
    },



};

