const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('DB ONLINE');

    } catch (error) {
        console.log(error);
        throw new error('error en la bd, hable con el admin')
    }
}

module.exports = {
    dbConnection
}