import express from "express";
import router from "./routes/index.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: `Hello, World! Request IP: ${req.ip}` });
});

app.use("/api", router);

// 404 handler if all routes missed
app.use((_, res) => {
  res.status(404).json({ error: "Not found" });
});

export default app;
