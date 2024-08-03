// app2.js

import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// // Redirect start page
// app.get("/", (req, res) => {
//   res.redirect("/app2");
//   // res.send('hello world');
// });

// app.get('/app2', (req, res) => {
//     res.send('Hello from Express App 2');
// });