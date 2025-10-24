// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Vehicle Service Management API is running...");
});

// API routes
app.use("/auth", authRoutes);
app.use("/services", serviceRoutes);

// Export the app for Vercel
module.exports = app;

// Run locally (Vercel ignores this section)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}