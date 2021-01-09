const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json({ extended: false }));

let env = process.env.NODE_ENV || "development";
// let env = "production";
connectDB(env);

app.use("/api/user", require("./src/routes/user"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
