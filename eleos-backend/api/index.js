const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const database = require('./services/Database-Service');
const router = require('./router');

dotenv.config();

const APP = express();
const PORT = process.env.port ?? 3000;

async function main() {

    // Set the API middleware
    APP.use(express.json(), (req, res, next) => {
        // Request origins allowed
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods allowed
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE');

        // Request headers allowed
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        // Continue middleware chain
        next();
    });

    // Set the API to listen on the specified port
    APP.listen(PORT, () => {
        console.log("SERVER LISTENING ON PORT:", PORT)
    });

    // Load database into app for later use
    APP.set('database', database);

    // Load API module routes
    APP.use("/", router);

    // Base endpoint for checking if API is active
    APP.get("/", async (req, res) => {
        const status = {
            "Status": "Running"
        };

        res.send(status);
    });

    // Catch all browser OPTIONS requests and respond with the default options list
    APP.options("*", (req, res) => {
        res.status(200).send("Allow: GET, OPTIONS, POST, PUT, PATCH, DELETE");
    });

    // Catch all requests that don't match a route, return 404 response
    APP.all("*", (req, res) => {
        return res.status(404).json({
            status: false,
            error: "Invalid Request"
        });
    });
}

main();