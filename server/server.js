import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";
dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json());

app.get("/api/health", (_, res) => res.json({ ok: true }));

app.get("/api/products", async (_, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM products ORDER BY id");
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB error" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [req.params.id]
    );
    if (!rows[0]) return res.status(404).json({ error: "Not found" });
    res.json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB error" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API on http://localhost:${port}`));