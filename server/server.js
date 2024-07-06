const express = require("express");
const cors = require("cors");
const mongoose = require("./Config/Connect");
const app = express();

const bodyParser = require("body-parser").urlencoded({ extended: true });
app.use("/public", express.static("public"));
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 3900;

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

const UserRoutes = require("./Routes/User");
 
app.use("/api", bodyParser, UserRoutes);
 