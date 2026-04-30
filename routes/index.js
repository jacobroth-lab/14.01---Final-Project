var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: 'About Downtown Donuts'})
})

router.get('/about', (req, res, next) => {
  res.render('about', {title: 'About Us'});
});

router.get('/menu', (req, res, next) => {
  res.render('menu', { title: 'Our Menu'});
});

router.get('/comments', (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const sql = 'SELECT * FROM comments ORDER BY created_at DESC LIMIT ? OFFSET ?';

  req.db.query(sql, [limit, offset], (err, results) => {
    if (err) return res.status(500).send('Error loading comments');

    req.db.query('SELECT COUNT(*) as total FROM comments', (err, countResult) => {
      const totalPages = Math.ceil(countResult[0].total / limit);
      res.render('comments', { 
        comments: results,
        currentPage: page, 
        totalPages: totalPages
      });
    });
  });
});

router.post('/comments', (req, res, next) => {
  const { name, comment } = req.body; 
  if ( !name.trim() || !comment.trim()){
    return res.status(400).send('Name and comment cannot be empty.');
  }
  if ( comment.length > 1000){
  return res.status(400).send('Comment is too long! Please keep it under 1000 characters.');
  }
  req.db.query('INSERT INTO comments (name, comment) VALUES (?, ?);', [name, comment], (err, results) => {
    if (err) return res.status(500).send('Error posting comment');
    res.redirect('/comments');
  });
});

module.exports = router;
