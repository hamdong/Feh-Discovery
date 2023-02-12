var express = require('express');
var app = express();
var db = require('./database.js');

var HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
  console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT));
});

app.get('/', (req, res, next) => {
  res.json({ message: 'Ok' });
});

app.get('/api/skills', (req, res, next) => {
  var sql =
    'SELECT name, slot, cond, stat, buff FROM tblSkill INNER JOIN tblEffect ON tblSkill.effectId = tblEffect.id; ORDER BY tblSkill.name DESC';
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

app.use(function (req, res) {
  res.status(404);
});
