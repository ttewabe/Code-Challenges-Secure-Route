const express = require('express');
const secretsRouter = express.Router();

secretsRouter.route('/')
.get((req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
      <html>
      <body>
        <b>
          The Secret life !<br>
          In the mountain!
        </b>
      </body>
      </html>
  `);  
})

module.exports = secretsRouter;
