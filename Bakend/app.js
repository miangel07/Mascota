import express, { json } from "express";
import bodyParser from "body-parser";
import conexion from "./src/database/conexion.js";
import router from "./src/Routers/index.js";
import cors from "cors";

const servidor = express();
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: true }));
servidor.set("view engine", "ejs");
servidor.set("views", "./views");

servidor.use(express.static("./public"));
conexion();
servidor.use(cors());
servidor.use("/api", router);
servidor.use('/documents', (req, res) => {
    res.render('documentacion.ejs');
});
servidor.listen(3000, () => {
  console.log("servidor en el puerto 3000");
});
