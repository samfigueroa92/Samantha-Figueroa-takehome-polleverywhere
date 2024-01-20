const app = require('./app.js');

require('dotenv').config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Service is running on port: ${PORT}`);
})