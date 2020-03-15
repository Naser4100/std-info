const express = require('express');

const indexRoute = require('./routes/index');

const app = express();

app.use('/api/v1/std', indexRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
