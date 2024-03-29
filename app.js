const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');
const OpenApiValidator = require('express-openapi-validator');
const cors = require("cors");
const restaurantsRoutes = require("./routes/restaurants.router");
const usersRoutes = require("./routes/users.router");
const reservationsRoutes = require("./routes/reservations.router");

app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
}) );

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use(
//     OpenApiValidator.middleware({
//       apiSpec: './openapi.yaml',
//       validateRequests: true,
//     }),
// );

app.use("/restaurants", restaurantsRoutes);
app.use("/users", usersRoutes);
app.use("/reservations", reservationsRoutes);

// app.use((err, req, res, next) => {
//     res.status(err.status || 500).json({
//       message: err.message,
//       errors: err.errors,
//     });
// });

module.exports = app;
