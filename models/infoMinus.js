const mongoose = require('mongoose');

const InfoMinus = new mongoose.Schema({
    account: {
        type: String,
        ref: 'account',
        required: true,
      },
      catMinus: {
        type: String,
        ref: 'categoryminus',
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
module.exports = mongoose.model('infominus', InfoMinus);