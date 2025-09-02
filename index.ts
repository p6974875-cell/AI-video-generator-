import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import videoRoutes from "./routes/videoRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Feydey Backend API Running");
});

app.use("/api/videos", videoRoutes);

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
