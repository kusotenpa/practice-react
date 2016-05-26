import fs from 'fs';

export function getComments(req, res) {
  fs.readFile('api/comments.json', (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
}


export function addComment(req, res) {
  fs.readFile('api/comments.json', (err, data) => {
    const comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('api/comments.json', JSON.stringify(comments, null, 4), _err => {
      if (_err) {
        return res.status(500).send(_err);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(comments);
    });
  });
}
