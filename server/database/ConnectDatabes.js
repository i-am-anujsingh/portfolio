const mongoose = require('mongoose');

const connectDB = async () => {
  try{
    mongoose.connect(process.env.MONGODB_URI)
    console.log('\nMongoDB Connected');
  }catch(error){
    
    console.log(`\nERROR DURING DATABASE CONNECTION ::${error}`)
    process.exit(1);
  }
}

module.exports = connectDB;