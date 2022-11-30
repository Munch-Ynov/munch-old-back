const app = require('./app');
const sequelize = require('./database');

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
    app.listen(process.env.PORT, () => {
        console.log('Server running at http://localhost:3000/');
    });

}).catch(err => {
    console.error("Unable to connect to the database:", err);
});