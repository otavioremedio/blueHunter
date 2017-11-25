/**
 * Created by JOGOS on 16/06/2017.
 */
var mongoose = require('mongoose');

var mongoose = require('mongoose');
module.exports = mongoose.model('Book', {title:  String,
                                         author: String});
