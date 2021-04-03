import dotenv from 'dotenv'
dotenv.config();



import express from "express";

const app = express();

import cors from 'cors';

const PORT = 5000;

import router from "./router.js";

import mongoclient from './config/db.js'
mongoclient();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use("/api/v1", router);

app.use("/", (req, res) => {
	// throw new Error("test error");
	res.send("Working");
});

app.use((error, req, res, next) => {
	console.log(error);
	// res.code(500).send(error.message);
});

app.listen(PORT, error => {
	error && console.log(error);

	console.log(`Server is running at http://localhost:${PORT}`);
});
