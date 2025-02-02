const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const PORT = 5000;
const students = JSON.parse(fs.readFileSync("student_data.json", "utf8"));

app.get("/search", (req, res) => {
  const query = req.query.q?.trim().toLowerCase();

  if (!query || query.length < 3) {
    return res.json([]);
  }

  const results = students
    .filter((student) => student.name.toLowerCase().includes(query))
    .slice(0, 5);

  res.json(results);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));