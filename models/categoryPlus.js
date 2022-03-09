const mongoose = require('mongoose');

const CategoryPlusSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true,
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      }
})
module.exports = mongoose.model('categoryplus', CategoryPlusSchema);