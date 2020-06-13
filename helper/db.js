const mongoose = require('mongoose');
module.exports = () => {
  mongoose.connect(
    'mongodb+srv://Admin:228855asd@cluster0.fjyap.gcp.mongodb.net/toolUsers?retryWrites=true&w=majority',
    { useMongoClient: true }
  );
  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });
};
