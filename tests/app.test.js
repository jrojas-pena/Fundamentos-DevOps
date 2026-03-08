const request = require("supertest");
const express = require("express");
const statusRoute = require("../src/routes/status");

const app = express();

app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

app.use("/api", statusRoute);

describe("DevOps lab app", () => {
    test("GET /health should return UP", async () => {
        const response = await request(app).get("/health");
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });

    test("GET /api/status should return ok", async () => {
        const response = await request(app).get("/api/status");
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("ok");
    });
});
