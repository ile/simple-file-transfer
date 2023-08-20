const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000; // Default port is 3000

app.use(express.text()); // Parse incoming data as plain text

app.post('/', (req, res) => {
  const content = req.body;

  fs.appendFile('output.txt', content + '\n', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('Content written to file:', content);
      res.status(200).send('Content written to file');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
