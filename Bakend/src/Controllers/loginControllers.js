import bcryptjs from "bcryptjs";
import usersModels from "../models/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "env/.env" });

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario por email
    const user = await usersModels.findOne({ email });

    // Si el usuario no existe, devolver un error
    if (!user) {
      return res.status(400).json({ message: "Credenciales incorrectas " });
    }

    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    // Si todo es correcto, devolver un mensaje de éxito
    if (isPasswordValid) {
      const token = jwt.sign({ usuario: user.email }, process.env.SECRET, {
        expiresIn: process.env.TIME,
      });
      return res
        .status(200)
        .json({ message: "Inicio de sesión exitoso", token });
    }

    // Si la contraseña no es válida, devolver un error
    return res.status(400).json({ message: "Contraseña incorrecta" });
  } catch (error) {
    // Manejar errores y devolver una respuesta de error
    console.error(error);
    return res.status(500).json({ error: "error" });
  }
};
export const validarToken = async (req, res, next) => {
  let token_user = req.headers["token"];
  if (!token_user) {
    res.status(402).json({ mensaje: "se requiere un token" });
  } else {
    const decode = jwt.verify(
      token_user,
      process.env.SECRET,
      (Error, decode) => {
        if (Error) {
          res.status(401).json({ mensaje: "token invalido" });
        } else {
          next();
        }
      }
    );
  }
};
