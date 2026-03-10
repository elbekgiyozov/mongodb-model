import "dotenv/config";
import express from "express";
import connectDb from "./utils/connectDb.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlamoqda`);
  });
});
