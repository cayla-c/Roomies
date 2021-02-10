const express = require('express');
const roomies = require('../database/index.js');
const path = require('path');
const parser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

//////////// SERVER CONTROLLERS: ////////

//// create: (assign):


//// read: (get empty rooms list)
app.get('/roomies/empties', (req, res) => {
  roomies.selectAllEmpties((err, list) => {
    if (err) {
      res.sendStatus(500);
    } else {
      var formattedList = [];
      list.map((element) => {
        if (element.single === 0) {
          element.single = 'single';
        } else {
          element.single = 'double';
        }
        formattedList.push(element);
      })
      res.send(formattedList)
    }
  })
})


//// read: (get occupancy list)
app.get('/roomies/occupancy', (req, res) => {
  roomies.selectAllOccupied((err, list) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(list)
    }
  })
})


//// update: (change user from one room to another)


//// delete: (someone took their toys and went home)