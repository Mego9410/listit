
import express from "express";
import cors from "cors";
import listingsRouter from "./routes/listings.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/v1/listings", listingsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`[resell-backend] listening on http://localhost:${PORT}`);
});
