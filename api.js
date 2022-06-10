const express = require("express");
const req = require("express/lib/request");
const { default: mongoose } = require("mongoose");
const user = require("./user.controller");
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect(
  "mongodb+srv://prueba:prueba@cluster0.qn56onk.mongodb.net/miapp?retryWrites=true&w=majority"
);

//Endpoints
app.get("/", user.list);
app.post("/", user.create);
app.get("/:id", user.get);
app.put("/:id", user.update);
app.patch("/:id", user.update);
app.delete("/:id", user.destroy);

app.get("*", (req, res) => {
  res.status(404).send("Esta no existe");
});
app.post("*", (req, res) => {
  res.status(404).send("Esta no existe");
});

// app.get("/", (req, res) => {
// res.status(200).send("Chanchito feliz");
// });

// app.post("/", (req, res) => {
//   res.status(201).send("Creando Chanchito");
// });

// app.put("/:id", (req, res) => {
//   console.log(req.params);
//   res.sendStatus(204);
// });

// app.get("/:id", (req, res) => {
//   console.log(req.params);
//   res.status(200).send(req.params);
// });

// app.patch("/:id", (req, res) => {
//   res.sendStatus(204);
// });

// app.delete("/:id", (req, res) => {
//   res.sendStatus(204);
// });

app.listen(port, () => {
  console.log("Arranca la aplicacion");
});
