//Carregar as variaveis de ambiente do arquivo .env:
require('dotenv').config({ path: '../../.env' });


console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);


//Conexão com o Sequelize
const{ Sequelize } = require('sequelize');

//Instancia
const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

//Teste da conexão
sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao MSQL usando o Sequelize');
    })
    .catch(err => {
        console.log('Não é possível conectar ao database: ', err);
    });

module.exports = sequelize;

