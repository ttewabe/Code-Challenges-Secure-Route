const express = require('express');
const secretsRouter = express.Router();

secretsRouter.route('/')
.get((req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
      <html>
      <body>
        <b>
          Secret tunnel!<br>
          Secret tunnel!<br>
          Through the mountain!<br>
          Secret, secret, secret, secret tunnel!
        </b>
      </body>
      </html>
  `);  
})

module.exports = secretsRouter;