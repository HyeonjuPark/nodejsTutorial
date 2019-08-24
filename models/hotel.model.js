const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  img: String,
  roomName: String,
  roomPrice: Number,
  bedSize: String,
  size: String,
  tv: String,
  glass: String,
  cutlery: String,
  // "img": "/w3images/room_single.jpg",
  // "roomName": "Single Room",
  // "roomPrice": 99,
  // "bedSize": "Single bed",
  // "size": "15",
  // "facilities": ["bath", "phone", "wifi"]
});

module.exports = mongoose.model('Hotel', hotelSchema);
