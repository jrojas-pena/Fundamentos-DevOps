const express = require("express");
const path = require("path");
const client = require("prom-client");

const statusRoute = require("./routes/status");

const app = express();
const PORT = 3000;

// Prometheus metrics
 const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Metrics endpoint
app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
        res.end(await client.register.metrics());
        });

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
            });

            // API routes
            app.use("/api", statusRoute);

            // Serve HTML
            app.use(express.static(path.join(__dirname, "views")));

            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
                });
