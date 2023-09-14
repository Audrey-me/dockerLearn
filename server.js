const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const uuid = require('uuid');


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Process the form data
app.post('/profile', (req, res) => {
  const formData = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  // storeFormData(item);
  res.json({
    status: 'success',
    message: 'Data received successfully!'
  });
  console.log(formData)
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
