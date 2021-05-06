const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")

('pk_test_51Inwr1LR2vdkpfEcvozpJylw7RFV3JYh4lwpPOJDXQoj1gRbH2uJx0ALArvvLcgFflE3YDTYtHhgFGwPgnfkN1mJ00klPsxBbX')

//API 

//App config
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response)=> response.status(200).send
('hello world'))

//list command
exports.api = functions.https.onRequest(app)