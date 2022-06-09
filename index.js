const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://prueba:prueba@cluster0.qn56onk.mongodb.net/miapp?retryWrites=true&w=majority"
);

const User = mongoose.model("User", {
  username: String,
  edad: Number,
});

const crear = async () => {
  const user = new User({ username: "chanchito feliz", edad: 15 });
  const saveUser = await user.save();
  console.log(saveUser);
};
crear();
