// "mongodb+srv://devendra1997kumar:HqDvTlQDGsdbMDpu@Ecommerce/cluster0.ks2mfam.mongodb.net/?retryWrites=true&w=majority"
// db.js
const mongoose = require('mongoose');
const URL= "mongodb+srv://devendra1997kumar:HqDvTlQDGsdbMDpu@cluster0.ks2mfam.mongodb.net/Ecommerce?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectDB;
