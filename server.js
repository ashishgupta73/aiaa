const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const data = [
  { id: 1, name: "Ashish" },
  { id: 2, name: "Aryan" },
];

app.get(`/getdata`, (req, res) => {
  res.json(data);
});

app.post(`/savedata`, (req, res) => {
  const { id, name } = req.body;
//   if (!id || !name) {
//     return res.status(400).json({ error: "ID and name are required" });
//   }
  data.push({ id, name });
  res.json({ message: "Data added successfully", data });
});

app.put(`/updatedata/:id`, (req, res) => {
    const {name} = req.body
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => {item.id === id,
    item.name=name
  });

  
  res.json({ message: "Data update successfully", data });
});
app.delete(`/deletedata/:id`, (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);

  data.splice(index,index);
  res.json({ message: "Data deleted successfully", data });
});

app.listen(port, () => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  console.log(`Server is running on port ${port}`);
});