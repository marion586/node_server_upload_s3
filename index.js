import express from "express";
import cors from "cors";
import config from "./config/index.js";
import connectDB from "./db.js";
import s3Router from "./routes/misc.js";
import userRouter from "./routes/user.js"; // Import user routes

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/s3", s3Router);
app.use("/api/users", userRouter); // Use the user route

app.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`);
});
