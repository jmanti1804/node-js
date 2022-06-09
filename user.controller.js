const req = require("express/lib/request");

const User = {
  get: (req, res) => {
    res.status(200).send("Este es unchanchitos");
  },
  list: (req, res) => {
    res.status(200).send("Hola chanchitos");
  },
  create: (req, res) => {
    res.status(201).send("Creando chanchitos");
  },
  update: (req, res) => {
    res.status(204).send("Actualizando chanchitos");
  },
  destroy: (req, res) => {
    res.status(204).send("Eliminando chanchitos");
  },
};

module.exports = User;
