const req = require("express/lib/request");
const Users = require("./Users");

const User = {
  get: async (req, res) => {
    res.status(200).send("Este es unchanchitos");
  },
  list: async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
  },
  create: async (req, res) => {
    console.log(req.body);
    res.status(201).send("Creando chanchitos");
  },
  update: async (req, res) => {
    res.status(204).send("Actualizando chanchitos");
  },
  destroy: async (req, res) => {
    res.status(204).send("Eliminando chanchitos");
  },
};

module.exports = User;
