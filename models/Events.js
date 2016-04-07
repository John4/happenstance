var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  name: String,
  start: {type: Number, default: 0},
  end: {type: Number, default: 23}
});

mongoose.model('Event', EventSchema);