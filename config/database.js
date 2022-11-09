require('dotenv').config();

module.exports = {
  development: {
    username: "postgres",
    password: "1234",
    database: "prueba",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
    
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "postgres",
      //currentDate:`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.${date.getHours()}.${date.getMinutes()}`,
      //fileName: `database-export-${currentDate}.tar`,
  }
  //Cambios
};
