const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  contents: {
    type: String,
    required: [true, 'You must input note contents']
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
