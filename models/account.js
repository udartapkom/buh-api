const mongoose = require('mongoose');

const AccountShema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true,
      },
      summ: {
          type: Number,
          default: 0,
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      }
})
module.exports = mongoose.model('account', AccountShema);
