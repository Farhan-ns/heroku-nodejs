const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    type: 'get',
    number: 1,
    nama: 'Farhanunnasih',
    npm: '2042408'
  });
})

app.post('/', (req, res) => {
  res.json({
    type: 'post',
    number: 1,
    nama: 'Farhanunnasih',
    npm: '2042408'
  });
})

app.put('/', (req, res) => {
  res.json({
    type: 'put',
    number: 1,
    nama: 'Farhanunnasih',
    npm: '2042408'
  });
})


app.delete('/', (req, res) => {
  res.json({
    type: 'delete',
    number: 1,
    nama: 'Farhanunnasih',
    npm: '2042408'
  });
})

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});