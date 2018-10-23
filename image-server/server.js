const express = require('express');
const jdenticon = require('jdenticon');


const app = express();

app.get('/:name', (req, res) => {
  const svg = jdenticon.toSvg(req.params.name, 150);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

const port = process.env.PORT || 4100;

app.listen(port, () => {
  console.log('Image server started at port: ' + port);
});
