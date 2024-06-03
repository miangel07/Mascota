import express, { json } from "express";
import bodyParser from "body-parser"
import conexion from "./src/database/conexion.js";
import router from "./src/Routers/index.js";

const servidor = express()
servidor.use(json())
servidor.use(bodyParser.urlencoded({extended: true}))
conexion()

servidor.use("/api",router)


servidor.listen(3000,()=>{
    console.log("servidor en el puerto 3000")
})
