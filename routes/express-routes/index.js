const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Get')
  })


app.post('/', function (req, res) {
    res.send('Post')
})

app.create('/', function (req, res) {
    res.send('Create')
})

app.update('/', function (req, res) {
    res.send('Update')
})

app.delete('/', function (req, res) {
    res.send('Delete')
})

app.reading('/', function (req, res) {
    res.send('Reading')
})

app.route('/')
  .get(function (req, res) {
    res.send('')
  })
  .post(function (req, res) {
    res.send('')
  })
  .create(function (req, res) {
    res.send('')
  })
  .update(function (req, res) {
    res.send('')
  })

  .delete(function (req, res) {
      res.send('')
  })

  .reading(function (req, res) {
      res.send('')
  })


