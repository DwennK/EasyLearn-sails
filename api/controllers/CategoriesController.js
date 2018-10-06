/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    //Returns categories
    find: async function(req,res){
        var myCategories = await Categories.find();
        
        return res.json(myCategories);
    },

};

