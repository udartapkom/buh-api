const mongoose = require('mongoose');

const InfoPlus = new mongoose.Schema({
    account: {
        type: String,
       // ref: 'account', используем если сохраняем ID
        required: true,
      },
      catPlus: {
        type: String,
       // ref: 'categoryplus', используем если сохраняем ID
        required: true,
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
      date: {
          type: Date,
      },
      summ: {
          type: Number,
          minlength: 1,
          maxlength: 12,
      },
      description: {
          type: String,
      }

})
module.exports = mongoose.model('infoplus', InfoPlus);