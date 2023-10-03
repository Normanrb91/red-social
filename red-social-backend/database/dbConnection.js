const {connect, set} = require('mongoose');


const dbConnection = async() =>{

    try {
        set("strictQuery", false);
        connect(process.env.DB_CNN, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conectado a la BD');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD')
    }
}

module.exports = {
    dbConnection
}