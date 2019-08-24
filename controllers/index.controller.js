const Hotel = require('../models/hotel.model');
let hotels = [
  {
    id: 1,
    img: '/w3images/room_single.jpg',
    roomName: 'Single Room1',
    roomPrice: 99,
    bedSize: 'Single bed',
    size: '15',
    facilities: ['bath', 'phone', 'wifi']
  },
  {
    id: 2,
    img: '/w3images/room_single.jpg',
    roomName: 'Single Room2',
    roomPrice: 99,
    bedSize: 'Single bed',
    size: '15',
    facilities: ['bath', 'phone', 'wifi']
  },
  {
    id: 3,
    img: '/w3images/room_single.jpg',
    roomName: 'Single Room3',
    roomPrice: 99,
    bedSize: 'Single bed',
    size: '15',
    facilities: ['bath', 'phone', 'wifi']
  }
];

exports.getRecommand = function(req, res, next) {
  Hotel.find().then(function(hotels) {
    res.json(hotels);
  });
};

exports.createRecommand = function(req, res, next) {
  console.log(req.body);
  // hotels.push(req.body);
  const hotel = new Hotel(req.body);
  hotel.save().then(function(err) {
    res.json(hotel);
  });
  // res.json(hotels);
};

exports.updateRecommand = function(req, res, next) {
  console.log(req.params.id);
  const id = req.params.id ? req.params.id : null;

  if (id) {
    // res.json(hotels[id - 1]);
    Hotel.findOne({ _id: id }).then(function(hotel) {
      // hotel.img = req.body.img;
      // hotel.img = req.body.img;
      // hotel.img = req.body.img;
      // hotel.img = req.body.img;
      // hotel.img = req.body.img;
      hotel = Object.assign(hotel, req.body);
      hotel.save().then(function() {
        res.json(hotel);
      });
    });
  }
  //   res.status(400).json({message: ""})
};
exports.deleteRecommand = function(req, res, next) {
  
};
