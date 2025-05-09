// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { handler as joinHandler } from "./lambda/SaveWaitlistEntry/index.mjs";
import { handler as unsubscribeHandler } from "./lambda/DateKnightUnsubscribeHandler/index.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Parse JSON bodies
app.use(express.json());

// Serve your built front‑end (adjust if your build dir is different)
app.use("/", express.static(path.join(__dirname, "dist")));

// POST /join → your join handler
app.post("/join", async (req, res) => {
    const lambdaEvent = { body: JSON.stringify({ email: req.body.email }) };
    const { statusCode, headers, body } = await joinHandler(lambdaEvent);
    res.status(statusCode).set(headers || {}).send(body);
});

// GET /unsubscribe → your unsubscribe handler
app.get("/unsubscribe", async (req, res) => {
    const lambdaEvent = { queryStringParameters: { email: req.query.email } };
    const { statusCode, headers, body } = await unsubscribeHandler(lambdaEvent);
    res.status(statusCode).set(headers || {}).send(body);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running at http://localhost:${port}`));
