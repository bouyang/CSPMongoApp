// app2.js

import express from "express";
import cors from "cors";
import records from "./routes/record.js";


import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);






const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all other routes (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});






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