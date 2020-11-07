import { router } from "./routes";
import express from "express";
const app = express()
app.use( router )
const PORT = 3030 

app.listen(PORT, () => {
  console.log(`Puerto publicado en http://localhost:${PORT}`);
});