require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/connectDb");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlamoqda`);
  });
});
